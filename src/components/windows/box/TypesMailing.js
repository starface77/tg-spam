import { useDispatch } from "react-redux"
import { CLOSE_WINDOW } from "../../../reducers/types"

const TypesMailing = () => {
    const dispatch = useDispatch()
    const selectHundler = () => {
        dispatch({type: CLOSE_WINDOW})
    }
    return <div className="window_content types_mailing">
        <p onClick={selectHundler} className="types_mailing_item">Все группы</p>
    </div>
}

export default TypesMailing