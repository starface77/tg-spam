import { useDispatch, useSelector } from "react-redux"
import { CLOSE_WINDOW } from "../../../reducers/types"
import UpdateData from "../../handlers/UpdateData"

const AddAccountSuccess = () => {
    const dispatch = useDispatch()
    const user_data = useSelector(a => a.app.user_data)
    const okayBut = () => {
        UpdateData(user_data, dispatch)
        dispatch({type: CLOSE_WINDOW})
    }
    
    return <div className="window_content sub_window">
        <span>Номер успешно добавлен в ваш аккаунт</span>
        <div className="but_next" onClick={okayBut}>Ладно</div>
    </div>
}

export default AddAccountSuccess