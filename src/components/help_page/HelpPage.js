import { Link } from "react-router-dom"
import HelpItemList from "./HelpItems"
import "./style.scss"

const HelpPage = () => {

    return <div>
            
            <p className="page_heading">Как начать использование?</p>
            <br />
            <HelpItemList />
    </div>
}

export default HelpPage