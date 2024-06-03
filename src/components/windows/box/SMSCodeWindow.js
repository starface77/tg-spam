import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_WINDOW, OPEN_WINDOW } from "../../../reducers/types";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';

const SMSCodeWindow = () => {
    const dispatch = useDispatch();
    const [numValue, setNumValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [numberContent, setNumberContent] = useState(0);
    const [errorText, setErrorText] = useState('');
    const user_data = useSelector(p => p.app.user_data);
    const numbersList = useSelector(s => s.app.number_list);

    const content = {
        maxValue: numberContent === 0 ? 16 : numberContent === 1 ? 5 : 25,
        placeholder: numberContent === 0 ? "Введите номер" : numberContent === 1 ? "Введите код" : "Введите пароль",
        text: numberContent === 0 ? "Введите номер телефона к которому привязан добавляемый аккаунт" :
            numberContent === 1 ? "Введите код подтверждения, который придет вам в сообщении" :
                "Введите пароль двухфакторной аутентификации",
        textBut: numberContent === 0 ? "Получить код" : "Подтвердить",
        nextPage: numberContent === 0 ? 1 : numberContent === 1 ? 2 : 3,
        error: numberContent === 0 ? "Сначала введите номер" :
            numberContent === 1 ? "Введите код с СМС" : "Введите пароль",
        value: numberContent === 0 ? numValue : numberContent === 1 ? codeValue : passwordValue,
        setValue: (e) => numberContent === 0 ? setNumValue(e) :
            numberContent === 1 ? setCodeValue(e) : setPasswordValue(e),
        typeInput: numberContent === 2 ? 'password' : 'default'
    };

    const getCodeHandler = async () => {
        const clean_number = numValue ? numValue.match(/\d/g).join('') : "";
        setErrorText('');
        if (numbersList.some(number => number.number === clean_number)) {
            toast.error("Данный номер уже существует");
        } else {
            if (content.value && clean_number.length === 11) {
                if (content.nextPage === 3) {
                    let response = await fetch('https://vm-c6638fea.na4u.ru/add_phone', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ "id": user_data.id, "string_session": 112, "phone": clean_number, "sub_active": 1 }),
                    }).then((response) => response.json());
                    if (response.result) {
                        dispatch({ type: CLOSE_WINDOW });
                        dispatch({ type: OPEN_WINDOW, payload: 'add_success' });
                    }
                }
                setNumberContent(content.nextPage);
            } else {
                setErrorText(content.error);
            }
        }
    };

    return (
        <div className="window_content sms_code_window">
            <span>{content.text}</span>
            {numberContent === 0 ?
                <PhoneInput
                    type={content.typeInput}
                    value={content.value}
                    placeholder={content.placeholder}
                    onChange={e => content.setValue(e)}
                    buttonClass="but_select_number_country"
                    country='ru' />
                :
                <input
                    maxLength={content.maxValue}
                    type={content.typeInput}
                    placeholder={content.placeholder}
                    value={content.value}
                    onChange={e => content.setValue(e.target.value)} />
            }
            {errorText && <div className="error_block">{errorText}</div>}
            <div className="but_next" onClick={getCodeHandler}>{content.textBut}</div>
        </div>
    );
};

export default SMSCodeWindow;
