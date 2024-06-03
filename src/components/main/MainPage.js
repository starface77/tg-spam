import { useLocation } from "react-router-dom"
import background_img from "../../assets/img/background.svg"
import { useEffect } from "react"
import FirstTextBlock from "./FirstTextBlock"

const MainPage = () => {
    const location = useLocation()
    useEffect(() => window.scrollTo(0, 0), [location])
    return <div className="main_container">
            <img src={background_img} className="bg_img" alt='' />
            <FirstTextBlock />
    </div>
}
export default MainPage