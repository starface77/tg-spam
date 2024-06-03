import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import TitleBlock from "./TitleBlock"
import TextBlock from "./TextBlock"
import HeaderMessages from "./HeaderMessages"
import UpdateData from "../handlers/UpdateData"
import Loading from "../../assets/Loading"

const MessagesPage = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const number_data = useSelector(n => n.app.number_data)
    const user_data = useSelector(n => n.app.user_data)
    const [edit_mod, setEditMod] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => window.scrollTo(0, 0), [location])
    useEffect(() => {
        setLoading(true)
        UpdateData(user_data, dispatch)
            .then(async data => data !== false && setLoading(false))
    }, [dispatch, user_data])

    return isLoading
        ? <Loading />
        : <div className="messages_container">
            <HeaderMessages />
            <div className="block_messages">
                {number_data.messages.map((m, i) =>
                    <div key={i} className="block_messages_item">
                        <TitleBlock edit_mod={edit_mod} setEditMod={setEditMod} index={i + 1} m={m} />
                        <TextBlock m={m} edit_mod={edit_mod} />
                    </div>)}
            </div>
        </div>
}

export default MessagesPage