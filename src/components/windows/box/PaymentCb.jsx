import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CLOSE_WINDOW } from '../../../reducers/types';
import "./payment.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PaymentCB() {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSaveClick = () => {
        if (amount < 1 || amount === 0) {
            toast.error('Введите сумму');
            return;
        } else {
            console.log('Amount to save:', amount);
            dispatch({ type: CLOSE_WINDOW });
            toast.success('Ваш запрос успешно отправлен!');
        }
    };

    return (
        <div className="window_content payment_window">
            <span>Введите сумму для пополнения баланса с помощью КРИПТО БОТ</span>
            <div className="payment-summa">
                <div className="main-elements">
                    <input
                        type="number"
                        className="payment_summa"
                        value={amount}
                        onChange={handleInputChange}
                    />
                    <div className="for-input">
                        <select>
                            <option>TON</option>
                            <option>USDT</option>
                            <option>TETHER</option>
                        </select>
                    </div>
                </div>
                <div className="but_next" onClick={handleSaveClick}>
                    Сохранить
                </div>
            </div>

        </div>
    );
}

export default PaymentCB;
