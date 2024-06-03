import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_BOT, OPEN_WINDOW } from "../../../reducers/types";
import ChangeFields from "../../queries/ChangeFields";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

const SwitchBut = ({ status }) => {
    const dispatch = useDispatch();
    const number_data = useSelector(state => state.app.number_data);
    const isSubscriptionPurchased = localStorage.getItem('isSubscriptionPurchased');

    const getColor = () => {
        return { backgroundColor: !status ? "#5B9872" : "#985B72" };
    };



    const getStatus = () => {
        return status ? "Остановить" : "Запустить";
    };

    const toggleHandler = async () => {
        if (isSubscriptionPurchased === "true") {
            const newStatus = status ? 0 : 1;
            const data = await ChangeFields("status_work", newStatus, number_data.number);
            if (data) {
                dispatch({ type: OPEN_WINDOW, payload: newStatus === 1 ? 'orderby' : 'orderoff' });
            }
        } else {
            dispatch({ type: OPEN_WINDOW, payload: "subscription" });
        }
    };

    return (
        <div>
            <div className='switch_but' style={getColor()} onClick={toggleHandler}>
                {getStatus()}
            </div>
        </div>
    );
}

export default SwitchBut;
