const GetNew = async(id) => {
    const fd = new FormData()
    fd.append('id', id)
    let response = await fetch('https://vm-c6638fea.na4u.ru/get_new', {
        method: 'POST',
        body: fd
    })
        .then((response) => response.json())
    return response
}

export default GetNew