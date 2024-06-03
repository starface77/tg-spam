import { Link } from "react-router-dom"
import moment from 'moment'
import 'moment/locale/ru' 

const NewsBlock = ({content}) => {

    return <Link to={'./' + content.id} className="news_block">
        <div className="img_container">
        <img src={content.main_img} alt=""/>
        </div>
        <h2>{content.head}</h2>
        <p>{content.subtext}</p>
        <p className="date">{moment(content.time_create).format("DD MMMM yyyy [года]")}</p>
    </Link>
}

export default NewsBlock