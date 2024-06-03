import { useDispatch } from "react-redux"
import { OPEN_WINDOW } from "../../../reducers/types"

const NoMoneyWindow = () => {
    const dispatch = useDispatch()
    return <div className="window_content no_money_window">
        <span>Недостаточно средств для оплаты подписки. Вы можете пополнить баланс прямо сейчас.</span>
        <div className="but_next" onClick={() => dispatch({type: OPEN_WINDOW, payload: "payment"})}>Пополнить баланс</div>
    </div>
}

export default NoMoneyWindow