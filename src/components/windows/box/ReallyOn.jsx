import { useDispatch, useSelector } from "react-redux";
import { CLOSE_WINDOW, OPEN_WINDOW, TOGGLE_BOT } from "../../../reducers/types";
import ChangeFields from "../../queries/ChangeFields";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReallyOn = () => {
    const dispatch = useDispatch();
    const number_data = useSelector(a => a.app.number_data);
    const user_data = useSelector(a => a.app.user_data);
    const isSubscriptionPurchased = localStorage.getItem('isSubscriptionPurchased');

    const paymentHandler = () => {
        if (isSubscriptionPurchased === "true" && user_data.balance >= 0) {
            ChangeFields("sub_date", moment().format("YYYY-MM-DD hh:mm:ss"), number_data.number)
                .then(data => {
                    dispatch({ type: CLOSE_WINDOW });
                    data && dispatch({ type: TOGGLE_BOT });
                    toast.success(`Бот успешно запущен!`)
                });
        }
    };

    return (
        <div className="window_content sub_window">
            <span>Вы действительно хотите запустить бот?</span>
            <div className="but_next" onClick={paymentHandler}>Да, Запустить</div>
        </div>
    );
};

export default ReallyOn;
