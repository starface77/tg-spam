import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CHANGE_INTERVAL, CHANGE_INTERVAL_RANGE, CLOSE_WINDOW } from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import { Slider } from '@mui/material';

const ChangeInterval = () => {
    const random_interval = useSelector(s => s.app.number_data.random_interval)
    const number_data = useSelector(s => s.app.number_data)
    const nrange_interval = useSelector(w => w.app.number_data.range_interval)
    const nlinterval = useSelector(w => w.app.number_data.interval)

    const [range_interval, setRangeInterval] = useState(nrange_interval || [1, 10])
    const [interval, setInterval] = useState(nlinterval)
    
    const dispatch = useDispatch()

    const intervalHandler = (e) => {
        if (!e) setInterval()
        else if (isFinite(+e)) {
            if (+e >= 1 && +e <= 60) setInterval(e)
            else {
                if (+e < 1) setInterval(1)
                if (+e > 60) setInterval(60)
            }
        }
    }

    useEffect(() => {
      console.log(nrange_interval)
    }, [nrange_interval])

    const sendInterval = () => {
        const field = random_interval ? "interval_random_int" : "interval_messages",
              value = random_interval ? (range_interval || nrange_interval) : (interval || nlinterval)
        ChangeFields(field, value, number_data.number)
            .then(data => data && dispatch({ type: CLOSE_WINDOW }))

        dispatch({ type: random_interval ? CHANGE_INTERVAL_RANGE : CHANGE_INTERVAL, payload: value })
        dispatch({ type: CLOSE_WINDOW })
    }

    
  const handleChangeInterval = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 1

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 60 - minDistance);
        setRangeInterval([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], 1 + minDistance);
        setRangeInterval([clamped - minDistance, clamped]);
      }
    } else {
        setRangeInterval(newValue);
    }
  };

    return <div className="interval_window window_content">

        {random_interval
        ?<Slider
  getAriaLabel={() => 'Interval'}
  value={range_interval}
  onChange={handleChangeInterval}
  min={1}
  max={60}
  disableSwap
/>
        :<Slider aria-label="Interval" value={interval} onChange={(e) => intervalHandler(e.target.value)} min={1} max={60} />}
        <div className="interval_values">
        {random_interval
            ?<span>От {range_interval[0]} до {range_interval[1]}</span>
            :<span>{interval}</span>}
        <span className="after_text">минут</span>
        </div>
        <div className="save_but" onClick={sendInterval}>Сохранить</div>
    </div>
}

export default ChangeInterval