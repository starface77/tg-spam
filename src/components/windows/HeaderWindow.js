import { useDispatch, useSelector } from "react-redux"
import { CLOSE_WINDOW } from "../../reducers/types"
import exit_icon from '../../assets/img/exit.svg'

const HeaderWindow = () => {
    const type_window = useSelector(w => w.app.window_data.type)

    const dispatch = useDispatch()

    const getTitle = () => {
        switch (type_window) {
            case 'list_numbers':
                return "Список номеров"
            case 'type_mailing':
                return "Тип рассылки"
            case 'interval':
                return "Интервал сообщений"
            case 'add_account':
                return "Добавление аккаунта"
            case 'delete_number':
                return 'Удаление'
            case 'sms_code':
                return "СМС подтверждение"
            case 'payment':
                return "Пополнение баланса"
            case 'subscription':
                return "Оплата подписки"
            case 'subscription_success':
                return "Подписка продлена"
            case 'nomoney':
                return "Недостаточно средств"
            case 'add_success':
                return "Аккаунт добавлен"
            case 'autoresponder':
                return "Автоответчик"
            case 'orderby':
                    return "Запустить бот?"
            case 'orderoff':
                        return "Отключить бот?"
            case 'paymentsumma':
                return "Пополнить баланс"
            case 'paymentcb':
                return "Пополнить баланс"
            default:
                break;
        }
    }

    return <div className="window_block_header">
        <h4>{getTitle()}</h4>
        <img src={exit_icon} onClick={() => dispatch({type: CLOSE_WINDOW})} alt=''/>
    </div>
}

export default HeaderWindow