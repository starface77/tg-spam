const QuantityMessages = ({quantity_send}) => {
    return <div className='last_time_message'>
        <p className='title'>Отправлено</p>
        <p>{quantity_send} сообщений</p>
    </div>
}

export default QuantityMessages