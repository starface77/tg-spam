const LastTimeMessage = ({last_time_message}) => {
    return <div className='last_time_message'>
        <p className='title'>Время крайней рассылки</p>
        {last_time_message
        ? <p>{last_time_message} (MSK)</p>
        : <p>Нет</p>}
    </div>
}

export default LastTimeMessage