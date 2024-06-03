import "./style.scss";

function TheLaunches() {
    const props = () => ({
        launchesData: [
            {
                name: "Покупки",
                text: "120 раз"
            },
            {
                name: "Пользыатель1",
                text: "1"
            },
            {
                name: "Пользыатель1",
                text: "1"
            }
        ]
    });

    return (
        <div className="main2">
            {props().launchesData.map((launchData, index) => (
                <div className="container">
                    <div key={index} className="launch-container">
                        <div className="launch-item">
                            <span className="value">{launchData.name}</span>
                        </div>
                        <div className="launch-item">
                            <div className="text-container">
                                <span className="value">{launchData.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TheLaunches;
