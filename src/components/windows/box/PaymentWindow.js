import React from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook
import '../../../assets/img/pay1.png'; // Importing image assets as required
import '../../../assets/img/pay2.png';
import '../../../assets/img/pay3.png';
import '../../../assets/img/pay4.png';
import '../../../assets/img/pay5.png';
import '../../../assets/img/pay6.png';
import { CLOSE_WINDOW, OPEN_WINDOW } from "../../../reducers/types";
import "./m.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentWindow = () => {
    const dispatch = useDispatch();
    const imgs = [
        require("../../../assets/cb.png"),
        require("../../../assets/payok.jpg"),
    ]
    function checknext() {
        toast.error("Не доступно!")
    }

    const mdopon = (e) => {
        const target = e.target;
        if (target.src === require("../../../assets/payok.jpg")) {
            dispatch({ type: CLOSE_WINDOW });
            dispatch({ type: OPEN_WINDOW, payload: "paymentsumma" });
        } else {
            dispatch({ type: CLOSE_WINDOW });
            dispatch({ type: OPEN_WINDOW, payload: "paymentcb" });
        }
    };
    return (
        <div className="window_content payment_window">
            <span>Выберите удобный способ оплаты</span>
            <div className="methods">
                {imgs.map((img, i) => (
                    <div key={i} onClick={mdopon}>
                        <img src={img} width={"1000px"} height={100} alt="" />

                    </div>
                ))}
            </div>
            <span>Другие методы оплаты: </span>
            <div className='but_next' onClick={checknext}>Другие методы</div>
        </div>
    );
};

export default PaymentWindow;
