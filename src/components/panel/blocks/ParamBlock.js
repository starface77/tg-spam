import { useDispatch, useSelector } from "react-redux"
import { OPEN_WINDOW, TOGGLE_AUTODEBIT, TOGGLE_MENTION, TOGGLE_RANDOM_INTERVAL, TOGGLE_RANDOM_MESSAGES } from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Circle from "../../../assets/Circle";

const ParamBlock = ({ cb }) => {

    const dispatch = useDispatch()

    const getValue = () => cb.type >= 2
        ? ((cb.param
            ? "Включен"
            : "Выключен")
            + cb.value)
        : cb.value

    const getColor = () => cb.type >= 2
        ? (cb.param
            ? "#4FCA5D"
            : "#985B72")
        : '#7F91A4'

    const number_data = useSelector(s => s.app.number_data)

    const toggleParam = () => {
        switch (cb.type) {
            case -1:
                dispatch({type: OPEN_WINDOW, payload: 'type_mailing'})
                break;
            case 0:
                dispatch({type: OPEN_WINDOW, payload: 'interval'})
                break;
            case 2:
                dispatch({type: OPEN_WINDOW, payload: 'autoresponder'})
                break;
            case 3:
                ChangeFields("mention", +!number_data.mention, number_data.number)
                .then(data => data && dispatch({type: TOGGLE_MENTION}))
                break;
            case 4:
                ChangeFields("interval_random_bool", +!number_data.random_interval, number_data.number)
                .then(data => data && dispatch({type: TOGGLE_RANDOM_INTERVAL}))
                break;
            case 5:
                ChangeFields("message_random_bool", +!number_data.random_messages, number_data.number)
                .then(data => data && dispatch({type: TOGGLE_RANDOM_MESSAGES}))
                break;
            case 6:
                ChangeFields("auto_pay", +!number_data.autodebit, number_data.number)
                .then(data => data && dispatch({type: TOGGLE_AUTODEBIT}))
                break;
        
            default:
                break;
        }
    }


    return <div className='param' onClick={() => toggleParam()}>
        <p className='title_param'>
            {(((cb.type === 0) && number_data.random_interval))
                ? <GiPerspectiveDiceSixFacesRandom size={25} color="#419FD9" />
                : ""}
            {cb.title}
            {cb.type === 2
                ? <Circle active={number_data.answerphone} />
                : ""}
            </p>
        <p style={{color: cb.type === 2 ? "" : getColor() }}>{cb.type === 2 ? "Изменить" : getValue()}</p>
    </div>
}

export default ParamBlock