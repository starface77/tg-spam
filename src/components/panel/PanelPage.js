import UserInfo from './UserInfo'
import NumberItem from './NumberItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NumbersList from './numbers_list/NumbersList'
import Loading from '../../assets/Loading'
import { OPEN_WINDOW } from '../../reducers/types'
import UpdateData from '../handlers/UpdateData'

const PanelPage = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const current_number_id = useSelector(n => n.app.number_data.id)
    const [isLoading, setLoading] = useState(true)
    const user_data = useSelector(n => n.app.user_data)

    const openAdder = () => dispatch({ type: OPEN_WINDOW, payload: "add_account" })

    useEffect(() => window.scrollTo(0, 0), [location])
    useEffect(() => {
        const username = localStorage.getItem("username")
        if (username) {
            UpdateData(user_data, dispatch).then(async data => data !== false && setLoading(false))
        } else {
            navigate("/signup")
        }

    }, [navigate, dispatch, user_data])


    return isLoading
        ? <Loading />
        : <div className="panel_container">
            <h1 className="panel_title">Панель управления</h1>
            <UserInfo nickname={"@" + user_data.username} balance={user_data.balance} />
            {current_number_id
                ? <div className='numbers'>
                    <h3>Подключенные номера</h3>
                    <NumbersList current_number_id={current_number_id} />
                    <NumberItem />
                </div>
                : <div className='no_numbers'>
                    <p className='no_numbers_text'>Подключенных номеров пока что нет</p>
                    <div className='add_number_but' onClick={openAdder}>Добавить номер</div>
                </div>}
        </div>
}

export default PanelPage