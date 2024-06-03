import { useEffect } from "react"

const ErrorPage = () => {
    useEffect(() => window.scrollTo(0, 0), [])
    return <div><h1>Такой страницы нет</h1></div>
}

export default ErrorPage