import { useCallback, useEffect, useState } from 'react'
import Loading from '../../assets/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN } from '../../reducers/types'
import SignHandler from '../sign/SignHandler'
import LogoBlock from './LogoBlock'
import MenuItems from './MenuItems'
import AccountItems from './AccountItems'

const Header = () => {

    const dispatch = useDispatch()
    const user_data = useSelector(m => m.app.user_data)
    const [isLoading, setLoading] = useState(true)
    const [switchMenu, setSwitchMenu] = useState(false)


    const loginHandler = useCallback(() => {
        setLoading(true)
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('password')

        username &&
            SignHandler(username, password, "login").then((data) => {
                if (data[0]) {
                    dispatch({ type: LOGIN, payload: data[1] })
                }
            })

        setLoading(false)
    }, [dispatch])

    useEffect(() => loginHandler(), [loginHandler])


    return isLoading
        ? <Loading width={20} />
        : <div className="header">
            <LogoBlock />
                <div className='open_menu' onClick={() => setSwitchMenu(!switchMenu)}>
                    <div className={'line' + (switchMenu ? ' active' : '')}></div>
                    <div className={'line' + (switchMenu ? ' active' : '')}></div>
                    <div className={'line' + (switchMenu ? ' active' : '')}></div>
                </div>
            <div className={'menu' + (switchMenu ? ' active_menu' : '')}>
            <MenuItems switchMenu={switchMenu} setSwitchMenu={setSwitchMenu}/>
            <AccountItems switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} user_data={user_data} />
            </div>

        </div>
}

export default Header