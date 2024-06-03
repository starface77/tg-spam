import { Link } from "react-router-dom"
import back_icon from '../../assets/img/back.svg'

const HeaderMessages = () => {
    return <div>
        <p className="page_heading">Сообщения рассылки</p>
        <Link className="back_func" to="/panel">
            <img src={back_icon} alt="" />
            <p>Назад</p>
        </Link>
    </div>
}

export default HeaderMessages