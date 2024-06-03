import { useDispatch } from "react-redux"
import { CLOSE_WINDOW, OPEN_WINDOW } from "../../../reducers/types"

const AddAccount = () => {

    const dispatch = useDispatch()

    const openWindowSMSCode = () => {
        dispatch({ type: CLOSE_WINDOW })
        dispatch({ type: OPEN_WINDOW, payload: "sms_code" })
    }

    return <div className="window_content window_add_account">
        <span>Вы можете добавить аккаунт по QR-коду или подтвердить с помощью смс</span>
        <div className="buttons">
            <div className="but disabled_but">QR-код</div>
            <div className="but" onClick={openWindowSMSCode}>СМС-код</div>
        </div>
    </div>
}

export default AddAccount