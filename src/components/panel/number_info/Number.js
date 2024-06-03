import { GetNumber } from "../GetNumber"

const Number = ({number, status}) => {

    return <div className='tel'>
        <h2><GetNumber n={number}/></h2>
        <p style={{ color: status ? "#5B9872" : "#985B72" }}>{status ? "Запущен" : "Остановлен"}</p>
    </div>
}

export default Number