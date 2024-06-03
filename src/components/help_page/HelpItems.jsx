import React from 'react';
import HelpItem from './HelpItem';
import jsonData from '../../json/help.json'; // Путь должен быть указан относительно текущего файла
import './style.scss'

function HelpItemList() {
    return (
        <div className='help-item'>
            {jsonData.map((item, index) => (
                <HelpItem key={index} data={item} />
            ))}
        </div>
    );
}

export default HelpItemList;
