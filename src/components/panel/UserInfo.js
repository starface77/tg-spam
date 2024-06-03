import { useDispatch } from "react-redux"
import GetIcon from "../../assets/GetIcon"
import { OPEN_WINDOW } from "../../reducers/types"
import { useEffect, useState } from "react"

const UserInfo = ({ nickname, balance }) => {
    const dispatch = useDispatch(),
        [new_balance, setNewBalance] = useState(0)

    useEffect(() => {
        let count = 0,
        counter = setInterval(() => {
            if (count < balance){
                count++
            setNewBalance(count)
            }else clearInterval(counter)
        }, 1000 / balance);

    }, [balance])

return <div className="userinfo">
    <h2>{nickname}</h2>
    <div className="balance">
        Баланс: {new_balance} ₽
        <div className="balance_but" onClick={() => dispatch({ type: OPEN_WINDOW, payload: 'payment' })}>
            <GetIcon icon="add" color="#7F91A4" />
        </div>
    </div>
</div>
}

export default UserInfo