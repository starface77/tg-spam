import { useDispatch } from "react-redux"
import { OPEN_WINDOW } from "../../../reducers/types"

const ListBut = () => {
    const dispatch = useDispatch()
    const openList = () => dispatch({ type: OPEN_WINDOW, payload: "list_numbers" })

    return <div className='numbers_list_tab open_but' onClick={openList}>
        <p>Весь список</p>
    </div>
}
export default ListBut