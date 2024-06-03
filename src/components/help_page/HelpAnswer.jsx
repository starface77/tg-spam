import React from 'react';
import { Link } from 'react-router-dom';

function HelpAnswers(props) {
    return (
        <div className="main">
            <img src={props.img} alt="Help" />
            <p>{props.text}</p>
            <Link to={props.link}>Go to FAQ</Link>
        </div>
    );
}

export default HelpAnswers;
