import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Loading from "../../assets/Loading"
import ErrorPage from "../ErrorPage"
import GetNew from "../queries/GetNew"
import moment from 'moment'
import 'moment/locale/ru' 
import back_icon from '../../assets/img/back.svg'

const NewsItemPage = () => {

    const params = useParams()
    const [currentContent, setCurrentContent] = useState()
    const [isLoading, setLoading] = useState(true)
    const news_content = useSelector(s => s.app.news_content)

    useEffect(() => {
        GetNew(params.id).then(e => {
            setCurrentContent(e.result.new_data)
            setLoading(false)
        })
        
    }, [params, news_content])

    return isLoading
        ? <Loading />
        : currentContent
            ? <div className="news_container">
                <Link className="back_func" to="/news">
            <img src={back_icon} alt="" />
            <p>Назад</p>
        </Link>
                <div className="news_item_block">
                    <p className="head">{currentContent.head}</p>
                    <p className="date">{moment(currentContent.time_create).format("DD MMMM yyyy [года]")}</p>
                    <img src={currentContent.main_img} alt=""/>
                    <div dangerouslySetInnerHTML={{__html: currentContent.text}}></div>

                </div>
            </div>
            : <ErrorPage />
}
export default NewsItemPage