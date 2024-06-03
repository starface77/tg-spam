const ChangeFields = async (title, value, number) => {

    let response = await fetch('https://vm-c6638fea.na4u.ru/edit_phone', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "phone": number,
            "fields":
            {
                [title]: value
            }
        })
    })
        .then((response) => response.json())
    console.log(response)
    return response.result
}

export default ChangeFields