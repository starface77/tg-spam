const GetPhones = async (id) => {
    let response = await fetch('https://vm-c6638fea.na4u.ru/get_phones', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "fields": ["id_phone", "phone"]
        })
    })
        .then((response) => response.json())

    return response.result
}

export default GetPhones