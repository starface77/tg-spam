import logo from './../../assets/img/bot.svg'

const LogoBlock = () => {
    return <div className='logo-block'>
        <img src={logo} style={{ width: 30 }} alt='' />
        <h3 className='logo'>TGSPAM</h3>
    </div>
}

export default LogoBlock