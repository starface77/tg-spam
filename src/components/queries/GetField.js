const GetField = async(id) => {
        let response = await fetch('https://vm-c6638fea.na4u.ru/get_phone', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": id,
            })
        })
            .then((response) => response.json())
        return response.result
}

export default GetField