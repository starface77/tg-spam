import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ParamMessagesBlock = ({ cb }) => {
    const random_messages = useSelector(s => s.app.number_data.random_messages)
    return <Link to={"messages"} className='param'>
        <p className='title_param'>
            {random_messages
                ? <GiPerspectiveDiceSixFacesRandom size={25} color="#419FD9" />
                : ""}
            {cb.title}
        </p>
        <p>{cb.value}</p>
    </Link>
}

export default ParamMessagesBlock