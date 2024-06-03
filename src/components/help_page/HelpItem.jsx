import React from 'react';
import './style.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function HelpItem({ data }) {
    function changeTheme() {

    }
    function scaleText(event) {
        const target = event.target;
        target.style.transition = "transform 0.5s";
        target.style.transform = "scale(0.9)";
        toast.error("Ошибка!");
        setTimeout(() => {
            target.style.transform = "scale(1)";
        
        }, 130);
    }

    return (
        <div className='help-item'>
            <div className="left" onClick={scaleText}>
                <Link to={"/help/#1"} className='datatext' >{data.text}</Link>
            </div>
        </div>
    );
}

export default HelpItem;
