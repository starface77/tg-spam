import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_TEXT_RESPONDER, CLOSE_WINDOW, TOGGLE_ANSWERPHONE } from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import ToggleButton from 'react-toggle-button'

const Autoresponder = () => {
    const dispatch = useDispatch()
    const number_data = useSelector(s => s.app.number_data)
    const [text, setText] = useState(number_data.text_autoresponder)

    const sendTextAutoresponder = () => {
        ChangeFields('text_autoresponder', text, number_data.number)
            .then(data => {

                dispatch({ type: CHANGE_TEXT_RESPONDER, payload: text })
                dispatch({ type: CLOSE_WINDOW })
            })
    }

    const onToggle = async () => {
        await ChangeFields("autoresponder", +!number_data.answerphone, number_data.number)
        await dispatch({ type: TOGGLE_ANSWERPHONE })
    }


    return <div className="window_content window_autoresponder">
        <span style={{display: 'flex', gap: 8}}>Автоответчик: <ToggleButton
            value={number_data.answerphone}
            onToggle={() => onToggle()} />
        </span>
        <span>Текст автоответчика</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <div className="but_next" onClick={sendTextAutoresponder}>Сохранить</div>
    </div>
}

export default Autoresponder