import { useSelector } from "react-redux"
import Number from "./Number"
import LastTimeMessage from "./LastTimeMessage"
import QuantityMessages from "./QuantityMessages"

const NumberInfo = () => {
    const number_data = useSelector(s => s.app.number_data)
    return  <div className="info_group">
        <Number number={number_data.number} status={number_data.status}/>
        <div className='extra_info'>
            <LastTimeMessage last_time_message={number_data.last_time_message}/>
            <QuantityMessages quantity_send={number_data.quantity_send}/>
        </div>
    </div>
}

export default NumberInfo