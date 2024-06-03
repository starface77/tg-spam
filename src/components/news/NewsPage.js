import { useDispatch, useSelector } from "react-redux"
import NewsBlock from "./NewsBlock"
import { useEffect } from "react"
import GetNews from "../queries/GetNews"
import { SET_NEWS_LIST } from "../../reducers/types"
import "./style.scss"

const NewsPage = () => {

    const dispatch = useDispatch()
    const news_list = useSelector(s => s.app.news_list)

    useEffect(() => {GetNews(30).then(e => dispatch({type: SET_NEWS_LIST, payload: e.result.news_data}))}, [dispatch])
    return <div className="news_container">
        <p className="page_heading">Новости и обновления</p>
        <div className="blocks">
            {news_list.map(c => <NewsBlock key={c.id} content={c}/>)}
        </div>
    </div>
}

export default NewsPage