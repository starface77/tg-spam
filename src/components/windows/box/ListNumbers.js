import { useDispatch, useSelector } from "react-redux";
import { CLOSE_WINDOW, SELECT_NUMBER_FROM_LIST, SET_NUMBER_DATA } from "../../../reducers/types";
import GetFirstPhone from "../../queries/GetFirstPhone";
import "./NumList.scss";

const ListNumbers = () => {
    const numberList = useSelector(state => state.app.number_list);
    const userData = useSelector(state => state.app.user_data);
    const dispatch = useDispatch();

    const formatPhoneNumber = (phoneNumber) => {
        if (phoneNumber) {
            const sliced = phoneNumber.slice(3);
            const firstPart = sliced.slice(0, 3);
            const secondPart = sliced.slice(3, 6);
            const thirdPart = sliced.slice(6, 8);
            const fourthPart = sliced.slice(8, 10);
            const fifthPart = sliced.slice(10);

            let formattedNumber = `+7 (${firstPart}) ${secondPart}`;
            if (thirdPart) formattedNumber += `-${thirdPart}`;
            if (fourthPart) formattedNumber += `-${fourthPart}`;
            if (fifthPart) formattedNumber += `-${fifthPart}`;

            return formattedNumber;
        }
        return phoneNumber;
    };

    const selectNumber = async (id, number) => {
        try {
            const data = await GetFirstPhone(userData.id, id);
            dispatch({ type: SET_NUMBER_DATA, payload: data });
            dispatch({ type: SELECT_NUMBER_FROM_LIST, payload: { id, number } });
            dispatch({ type: CLOSE_WINDOW });
        } catch (error) {
            console.error("Error selecting number:", error);
        }
    };

    return (
        <div className="window_content">
            <div className="num-list">
                {numberList && numberList.length > 0 && numberList.map(n => (
                    <p key={n.id} onClick={() => selectNumber(n.id, n.number)}>
                        {formatPhoneNumber(n.number)}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ListNumbers;
