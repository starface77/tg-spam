import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../assets/Loading";
import ErrorPage from "../ErrorPage";
import GetTechHelp from "../queries/GetNew";

const HelpMain = () => {
    const params = useParams();
    const [currentContent, setCurrentContent] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        GetTechHelp(params.id).then(data => {
            setCurrentContent(data.result.tech_help_data);
            setLoading(false);
        });
    }, [params]);

    return isLoading ? (
        <Loading />
    ) : currentContent ? (
        <div className="help_container">
            <Link className="back_func" to="/help">
                <p>Назад</p>
            </Link>
            <div className="help_item_block">
                <p className="head">{currentContent.head}</p>
                <div dangerouslySetInnerHTML={{ __html: currentContent.text }}></div>
            </div>
        </div>
    ) : (
        <ErrorPage />
    );
};

export default HelpMain;
