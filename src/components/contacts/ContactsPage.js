import { Link } from "react-router-dom"
import GetIcon from "../../assets/GetIcon"
import Tooltip from "../alert/AlertDiv"

const ContactsPage = () => {

    return <div>
        <p className="page_heading">Контакты</p>
        <div className="contacts_container">
            <div className="intro_block">
                <div className="text_content">
                    <h1>Мы на связи</h1>
                    <p>Готовы ответить на любые ваши вопросы!</p>
                </div>
            </div>
            <div className="contacts_block">
                <p className="heading">Служба поддержки</p>
                <p className="content">Время работы службы поддержки:
                    <p>Пн-Пт: 09:00 — 18:00</p>
                </p>
                <div className="social_networks">
                    <Tooltip text="Зп дай ишак еще 4 бакса!">
                        <Link to={'mailto:dtpdtp1@gmail.com'}><GetIcon icon={'mail'} />dtpdtp1@gmail.com</Link>
                    </Tooltip>
                    <Link to={'https://t.me/none'}><GetIcon icon={'tg'} />@none</Link>
                    <Link to={'https://t.me/none'}><GetIcon icon={'tg'} />@none</Link>
                </div>
            </div>
        </div>
    </div>
}

export default ContactsPage