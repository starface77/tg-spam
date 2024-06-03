const GetUser = async (id) => {
    let response = await fetch('https://vm-c6638fea.na4u.ru/get_user', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "fields": ["balance"]
        })
    })
        .then((response) => response.json())

    return response.result
}

export default GetUser