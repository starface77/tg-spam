const GetFirstPhone = async (id_user, id_phone) => {
    let response = await fetch('https://vm-c6638fea.na4u.ru/get_phone', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id_user,
            "id_phone": id_phone,
            "fields": ["id_phone", "phone", "sub_date", "status_work", "message",
                "message_two", "message_three", "message_four", "interval_messages",
                "type_spam", "mention", "autoresponder", "interval_random_bool", 
                "message_random_bool", "auto_pay", 'last_start_date', 'count_last_message', 
                'interval_random_int', 'text_autoresponder']

        })
    })
        .then((response) => response.json())
    const data = response.result.phone_data
    return data.length !== 0 ? {
        id: data.id_phone,
        number: data.phone,
        time_sub: data.sub_date,
        status: data.status_work,
        type_mailing: data.type_spam,
        interval: data.interval_messages,
        answerphone: data.autoresponder,
        mention: data.mention,
        random_interval: data.interval_random_bool,
        random_messages: data.message_random_bool,
        autodebit: data.auto_pay,
        messages: [
            { id: 1, text: data.message || '' },
            { id: 2, text: data.message_two || '' },
            { id: 3, text: data.message_three || '' },
            { id: 4, text: data.message_four || '' },
        ],
        last_time_message: data.last_start_date,
        quantity_send: data.count_last_message,
        text_autoresponder: data.text_autoresponder || '',
        range_interval: JSON.parse(data.interval_random_int)
    }
    : false
}

export default GetFirstPhone