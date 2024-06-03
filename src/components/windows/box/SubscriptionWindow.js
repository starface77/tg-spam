import { useDispatch, useSelector } from "react-redux";
import { CLOSE_WINDOW, OPEN_WINDOW, SET_SUBSCRIPTION_PURCHASED } from "../../../reducers/types";
import ChangeFields from "../../queries/ChangeFields";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuySubscription from "../../queries/BuySubs";

const SubscriptionWindow = () => {
    const dispatch = useDispatch();
    const number_data = useSelector(a => a.app.number_data);
    const isSubscriptionPurchased = useSelector(a => a.app.isSubscriptionPurchased);

    const paymentHandler = async () => {
        try {
            if (isSubscriptionPurchased) {
                toast.error("Подписка уже куплена!");
                return;
            }
    
            const subscriptionResult = await BuySubscription(true);
    
            if (subscriptionResult === false) {
                await ChangeFields("sub_date", moment().format("YYYY-MM-DD hh:mm:ss"), number_data.number);
                localStorage.setItem('isSubscriptionPurchased', 'true');
    
                dispatch({ type: SET_SUBSCRIPTION_PURCHASED });
                dispatch({ type: CLOSE_WINDOW });
                dispatch({ type: OPEN_WINDOW, payload: "subscription_success" });
                toast.success(`Подписка успешно активирована!`);
            } else {
                throw new Error("Ошибка при выполнении запроса");
            }
        } catch (error) {
            console.error("Error during subscription purchase:", error.message);
            toast.error("Произошла ошибка при выполнении запроса");
        }
    };
    
    return (
        <div className="window_content sub_window">
            <span>Вы действительно хотите оплатить подписку на 24 часа (50₽)?</span>
            <div className="but_next" onClick={paymentHandler}>Да, оплатить</div>
        </div>
    );
};

export default SubscriptionWindow;