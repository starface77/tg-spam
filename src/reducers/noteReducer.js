import { CHANGE_INTERVAL, CHANGE_INTERVAL_RANGE, CHANGE_MESSAGE_TEXT, CHANGE_TEXT_RESPONDER, CLOSE_WINDOW, DELETE_FROM_NUMBER_LIST, DELETE_NUMBER, LOGIN, LOGOUT, OPEN_WINDOW, SELECT_NUMBER_FROM_LIST, SET_NEWS_LIST, SET_NUMBER_DATA, SET_PHONES, TOGGLE_ANSWERPHONE, TOGGLE_AUTODEBIT, TOGGLE_BOT, TOGGLE_MENTION, TOGGLE_RANDOM_INTERVAL, TOGGLE_RANDOM_MESSAGES } from './types';

const initialState = {
    window_data: {
        type: 0,
        status: false
    },
    number_data: {
        /* id: 1,
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
         quantity_send: 5*/
    },
    user_data: {
    },
    number_list: [
        { id: 1, number: '+7 908 024 40 96' },
        { id: 2, number: '+7 928 422 46 34' },
    ],
    news_list: [
        {
        id: 4,
        img: "https://i.pinimg.com/564x/84/fc/72/84fc72e52401849d8c7a53768d73c2f0.jpg",
        title: "Обновление: появилось что-то новое",
        subtitle: "Товарищи! рамки и место обучения кадров позволяет оценить значение направлений прогрессивного развития.",
        layout: <div></div>,
        date: '28 октября 2023 года'
        }
    ],
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_WINDOW:
            return {
                ...state,
                window_data: {
                    ...state.open_window,
                    type: action.payload,
                    status: true
                }
            }
        case CLOSE_WINDOW:
            return {
                ...state,
                window_data: {
                    ...state.open_window,
                    status: false
                }
            }
        case TOGGLE_ANSWERPHONE:
            return {
                ...state,
                number_data: {
                    ...state.number_data,
                    answerphone: !state.number_data.answerphone
                }
            }
        case TOGGLE_MENTION:
            return {
                ...state,
                number_data: {
                    ...state.number_data,
                    mention: !state.number_data.mention
                }
            }
        case TOGGLE_RANDOM_INTERVAL:
            return {
                ...state,
                number_data: {
                    ...state.number_data,
                    random_interval: !state.number_data.random_interval
                }
            }
        case TOGGLE_RANDOM_MESSAGES:
            return {
                ...state,
                number_data: {
                    ...state.number_data,
                    random_messages: !state.number_data.random_messages
                }
            }
        case TOGGLE_AUTODEBIT:
            return {
                ...state,
                number_data: {
                    ...state.number_data,
                    autodebit: !state.number_data.autodebit
                }
            }
        case CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                number_data: {
                    ...state.number_data,
                    messages:
                        state.number_data.messages.map(m => m.id === action.payload[0]
                            ? {
                                id: action.payload[0],
                                text: action.payload[1]
                            }
                            : m),
                }
            }
        case SELECT_NUMBER_FROM_LIST:
            return {
                ...state,
                number_list: [action.payload, ...state.number_list.filter(n => n.id !== action.payload.id)]
            }
        case CHANGE_INTERVAL:
            return {
                ...state,
                number_data: { ...state.number_data, interval: action.payload }
            }
        case CHANGE_INTERVAL_RANGE:
            return {
                ...state,
                number_data: { ...state.number_data, range_interval: action.payload }
            }
        case DELETE_NUMBER:
            return {
                ...state,
                number_list: state.number_list.filter(n => n.id !== state.number_data.id)
            }
        case TOGGLE_BOT:
            return {
                ...state,
                number_data: { ...state.number_data, status: !state.number_data.status }
            }
        case LOGIN:
            return {
                ...state,
                user_data: {
                    id: action.payload.id,
                    username: action.payload.username,
                    password: action.payload.password,
                    balance: action.payload.balance,
                    isLogged: true,
                }
            }
        case LOGOUT:
            return {
                ...state,
                user_data: {
                    isLogged: false
                },
                number_data: {},
                number_list: []
            }
        case SET_PHONES:
            return {
                ...state,
                number_list: action.payload || []
            }
        case SET_NUMBER_DATA:
            return {
                ...state,
                number_data: action.payload
            }
        case DELETE_FROM_NUMBER_LIST:
            return {
                ...state,
                number_list: state.number_list.filter(n => n.id !== action.payload)
            }
        case CHANGE_TEXT_RESPONDER:
            return {
                ...state,
                number_data: { ...state.number_data, text_autoresponder: action.payload }
            }
        case SET_NEWS_LIST:
            return {
                ...state,
                news_list: action.payload
            }

        default:
            return state
    }
}

export default noteReducer;