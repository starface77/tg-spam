import SpamBlock from "./SpamBlock"
import SwitchBut from "./SwitchBut"
import DeleteBut from "./DeleteBut"

const ControlBlock = ({status}) => {

    return <div className='control_block'>
        <SpamBlock />
        <SwitchBut status={status}/>
        <DeleteBut />
    </div>
}

export default ControlBlock