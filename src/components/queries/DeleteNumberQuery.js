const DeleteNumberQuery = async (id, id_number, number) => {

    console.log(id)
    console.log(id_number)
    console.log(number)

    let fd = new FormData()
    fd.append('id', id)
    fd.append('id_phone', id_number)
    fd.append('phone', number)
    let response = await fetch('https://vm-c6638fea.na4u.ru/delete_phone', {
        method: 'POST',
        body: fd
    })
        .then((response) => response.json())
    return response.result
}

export default DeleteNumberQuery