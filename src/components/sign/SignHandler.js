import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignHandler = async (username, password, api_link) => {
    let fd = new FormData()
    fd.append('username', username)
    fd.append('password', password)

    let response = await fetch('https://vm-c6638fea.na4u.ru/' + api_link, {
        method: 'POST',
        body: fd,
    })
    .then((response) => response.json())

    if (response.result) {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        
    
        return [true, {
            id: response.result.id,
            balance: response.result.balance,
            username,
            password
        }]
    }

    toast.error("Неверный логин или пароль");

    return [false, "Неверный логин или пароль"]
}

export default SignHandler;
