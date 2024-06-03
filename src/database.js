const database = (type, id) => {

    let db = {
        numbers: [
            {
                id: 1,
                number: "79080244096",
                time_sub: '24.09.23 18:59',
                status: 1,
                type_mailing: 0,
                interval: 1,
                answerphone: true,
                mention: true,
                random_interval: true,
                random_messages: true,
                autodebit: true,
                messages: [
                    { id: 1, text: 'Здравствуйте' },
                    { id: 2, text: '' },
                    { id: 3, text: '' },
                    { id: 4, text: '' },
                ],
                last_time_message: "2023-09-21 21:25",
                quantity_send: 5
            },
            {
                id: 2,
                number: "79284740912",
                time_sub: '26.09.23 08:59',
                status: 0,
                type_mailing: 0,
                interval: 1,
                answerphone: false,
                mention: false,
                random_interval: false,
                random_messages: false,
                autodebit: false,
                messages: [
                    { id: 1, text: 'Здравствуйте' },
                    { id: 2, text: '' },
                    { id: 3, text: '' },
                    { id: 4, text: '' },
                ],
                last_time_message: "",
                quantity_send: 0
            },

        ]
    }

    const getNumber = () => {
        return db.numbers.find(n => n.id === id)
    }

    const deleteNumber = () => {
        const new_nums = db.numbers.filter(n => n.id !== id)
        db.numbers = new_nums
        if (new_nums.length)
            return new_nums[0]
        else
            return {}
    }


    switch (type) {
        case "numbers":
            return getNumber()
        case "delete":
            return deleteNumber()
        default:
            return null
    }
}

export const getNumberFromDB = (id) => database("numbers", id)
export const deleteNumberFromDB = (id) => database("delete", id)