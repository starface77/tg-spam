import React from "react";
import { useSelector } from "react-redux";
import AddBut from "./AddBut";
import ListBut from "./ListBut";
import NumberTab from "./NumberTab";

const NumbersList = ({ current_number_id }) => {
    const number_list = useSelector(n => n.app.number_list);
    const uniqueNumbers = new Set(); // Создаем Set для отслеживания уникальных номеров

    const renderedTabs = number_list.map(n => {
        if (!uniqueNumbers.has(n.number)) {
            uniqueNumbers.add(n.number);
            return <NumberTab key={n.id} current_number_id={current_number_id} id={n.id} number={n.number} />;
        }
        return null;
    }).filter(Boolean).slice(0, 3);

    return (
        <div className='numbers_list'>
            {renderedTabs}
            {number_list.length > 3 && <ListBut />}
            <AddBut />
        </div>
    );
};

export default NumbersList;
