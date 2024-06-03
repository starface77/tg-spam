import { useDispatch } from "react-redux"
import { CHANGE_MESSAGE_TEXT } from "../../reducers/types"

const TextBlock = ({m, edit_mod}) => {
    const dispatch = useDispatch()
    const changeText = (e) => dispatch({
        type: CHANGE_MESSAGE_TEXT,
        payload: [m.id, e]
    })

    return edit_mod === m.id
        ? <textarea
            className="text_block"
            value={m.text}
            onChange={(e) => changeText(e.target.value)} />
        : <div className="text_block">
            <p>{m.text || "Пусто"}</p>
        </div>
}

export default TextBlock