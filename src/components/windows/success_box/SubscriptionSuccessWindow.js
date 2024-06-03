import { useDispatch } from "react-redux"
import { CLOSE_WINDOW } from "../../../reducers/types"

const SubscriptionSuccessWindow = () => {
    const dispatch = useDispatch()
    return <div className="window_content sub_window">
        <span>Подписка успешно продлена на 24 часа</span>
        <div className="but_next" onClick={() => dispatch({type: CLOSE_WINDOW})}>Ладно</div>
    </div>
}

export default SubscriptionSuccessWindow