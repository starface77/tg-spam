import { Link } from "react-router-dom"
import "./style.scss"

const FirstTextBlock = () => {
    return <div className="main_text">
        <h1>Рассылка сообщений в Telegram</h1>
        <p>Автоматизируйте обмен своим контентом в мессенджере.</p>
        <div className="buttons">
        <Link className="start_but" to={'/signup'}>Начало работы</Link>
        </div>
    </div>
}

export default FirstTextBlock