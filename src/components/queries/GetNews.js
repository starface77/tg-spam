const GetNews = async(rows) => {
    const fd = new FormData()
    fd.append('rows', rows)
    let response = await fetch('https://vm-c6638fea.na4u.ru/get_news', {
        method: 'POST',
        body: fd
    })
        .then((response) => response.json())
    return response
}

export default GetNews