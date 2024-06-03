import { useSelector } from "react-redux"
import ChangeFields from "../queries/ChangeFields";

const TitleBlock = ({ edit_mod, setEditMod, index, m }) => {

    const getTitle = () => {
        switch (m.id) {
            case 1: return 'message'
            case 2: return 'message_two'
            case 3: return 'message_three'
            case 4: return 'message_four'
            default: break
        }
    }

    const number_data = useSelector(s => s.app.number_data)
    const editModHundler = async() => {
        if (edit_mod) {
            if (edit_mod === m.id) {
                await ChangeFields(getTitle(), m.text, number_data.number)
                setEditMod(false)
            }
            else setEditMod(m.id)
        } else setEditMod(m.id)
    }

    const getTextBut = () => edit_mod === m.id ? "Сохранить" : "Изменить"

    return <div className="title_block">
        <h3>Сообщение #{index}</h3>
        <div className="change_but" onClick={editModHundler}>{getTextBut()}</div>
    </div>
}

export default TitleBlock