import { useDispatch } from "react-redux"
import GetIcon from "../../../assets/GetIcon"
import { OPEN_WINDOW } from "../../../reducers/types"

const AddBut = () => {
    const dispatch = useDispatch()
    const openAdder = () => dispatch({ type: OPEN_WINDOW, payload: "add_account" })

    return <div className='numbers_list_tab open_but' onClick={openAdder}>
        <GetIcon icon="add" color='#fff' />
    </div>
}
export default AddBut