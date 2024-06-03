import { useEffect } from "react"
import ParamBlock from "./ParamBlock"
import ParamMessagesBlock from "./ParamMessagesBlock"

const Blocks = ({ number_data }) => {

    const getTypeMailing = () => {
        const types_mailing = ["Все группы"]
        return types_mailing[+!number_data.type_mailing]
    }

    const getQuintityMessages = () => number_data.messages.reduce(
        (acum, m) =>
            acum + (m.text ? 1 : 0)
        , 0)

    const content_blocks = [
        { type: -1, title: "Тип рассылки", value: getTypeMailing() },
        {
            type: 0, title: "Интервал", value: (number_data.random_interval
                    ? (number_data.range_interval[0] + " - " + number_data.range_interval[1])
                    : number_data.interval)
                + " минут"
        },
        { type: 1, title: "Сообщения", value: getQuintityMessages() + " из 4" },
        { type: 2, title: "Автоответчик", value: "", param: number_data.answerphone },
        { type: 3, title: "Упомянания", value: "ы", param: number_data.mention },
        { type: 4, title: "Рандом интервалов", value: "", param: number_data.random_interval },
        { type: 5, title: "Рандом сообщений", value: "", param: number_data.random_messages },
        { type: 6, title: "Автосписание", value: "о", param: number_data.autodebit },
    ]

    
    useEffect(() => {
        console.log(number_data.range_interval)
            }, [number_data.range_interval])

    return <div className='tel_info'>
        {content_blocks.map((cb, i) => cb.type === 1
            ? <ParamMessagesBlock key={i} cb={cb} />
            : <ParamBlock key={i} cb={cb} />)}

    </div>
}

export default Blocks