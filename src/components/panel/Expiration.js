import React, { useEffect, useState } from 'react';
import time_icon from '../../assets/img/time_icon.svg';
import moment from 'moment';
import { OPEN_WINDOW } from '../../reducers/types';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Expiration = ({ time_sub }) => {
    const dispatch = useDispatch();
    const isSubscriptionPurchased = localStorage.getItem('isSubscriptionPurchased')
    const checkDisplay = localStorage.getItem('Displayer');


    useEffect(() => {
        if (isSubscriptionPurchased === 'true') {
            localStorage.setItem("Displayer", "none");
        } else {
            localStorage.setItem("Displayer", "flex");
        }
    }, [isSubscriptionPurchased]);

    const CheckerFn = () => {
        if (isSubscriptionPurchased) {
            toast.error("У вас подписка уже имеется!");
        } else {
            dispatch({ type: OPEN_WINDOW, payload: 'subscription' });
        }
    };

    const getTimeSub = (return_sec) => {
        if (!time_sub) return '';
        const seconds = moment().diff(moment(time_sub, "ddd, DD MMM YYYY hh:mm:ss Z").add(24, 'h'), 's');
        const hour = Math.abs(seconds / 60 / 60);
        const minute = ((hour - Math.floor(hour)) * 60);

        return return_sec
            ? seconds
            : Math.floor(hour) + "ч. " + Math.floor(minute) + "мин. ";
    };

    return (
        <div className='expiration'>
            {
                getTimeSub(true) < 0 && !isSubscriptionPurchased ? (
                    <div>
                        <div className='time_param'>
                            <img src={time_icon} alt='' />
                            <p>{getTimeSub()}</p>
                        </div>
                    </div>
                ) : null
            }
            {
                !isSubscriptionPurchased &&
                <div className='pay_but' onClick={CheckerFn} style={{ display: checkDisplay }}>Оплатить подписку</div>
            }
        </div>
    );
}

export default Expiration;
