import { Link, useNavigate } from "react-router-dom"
import { LOGOUT } from "../../reducers/types"
import { useDispatch } from "react-redux"

const AccountItems = ({user_data, setSwitchMenu, switchMenu}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        setSwitchMenu(!switchMenu)
        localStorage.clear()
        navigate('/signin')
        dispatch({ type: LOGOUT })
    }

    return <div className="account_items">
        {user_data.isLogged
            ? <div className='account'>
                <p>@{user_data.username}</p>
                <Link className='logout_but' onClick={() => setSwitchMenu(!switchMenu)} to={"/panel"}>Панель</Link>
                <div className='logout_but' onClick={logoutHandler}>Выйти</div>
            </div>
            : <div className='w-sign'>
                <Link className='item signin' onClick={() => setSwitchMenu(!switchMenu)} to={'/signin'}>Войти</Link>
                <Link className='item signup' onClick={() => setSwitchMenu(!switchMenu)} to={'/signup'}>Регистрация</Link>
            </div>}
    </div>
}

export default AccountItems