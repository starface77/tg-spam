import "./style.scss"

function Question() {
    return (
        <div className="question">
            <p>Есть вопросы?, Задайте!</p>
            <textarea></textarea>
            <input type="email" placeholder="Вводите вашу почту!"></input>
            <input type="number" placeholder="Ваш номер телефон!"></input>
            <div className="sign_but">Отправить</div>
        </div>
    );
}

export default Question;