import React from 'react';
import telegram from "../../assets/telegram.png";
import "./style.scss";

function NewBlock() {
    const reviews = [
        {
            image: telegram,
            alt: "Telegram",
            name: "VIP",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis esse quam veritatis eveniet porro sapiente error vitae ex enim. Rerum, doloremque! Corporis fuga enim consequatur iusto harum? Inventore, officia quibusdam!"
        },
        {
            image: telegram,
            alt: "Telegram",
            name: "PREMIUM",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis esse quam veritatis eveniet porro sapiente error vitae ex enim. Rerum, doloremque! Corporis fuga enim consequatur iusto harum? Inventore, officia quibusdam!"
        },
        {
            image: telegram,
            alt: "Telegram",
            name: "GOLD",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis esse quam veritatis eveniet porro sapiente error vitae ex enim. Rerum, doloremque! Corporis fuga enim consequatur iusto harum? Inventore, officia quibusdam!"
        }
    ];

    return (
        <div className="main">
            <div className="container">
                <div className="texts-bio">
                    <span>У нас имеется тарифы!</span>
                    <p className='p1'>Покупай лучший тариф чтобы открыть больше возможнестей!</p>
                </div>
               
            </div>
            <div className='w-full m-auto'>

                <div className="mt-20">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card flex flex-col items-center justify-center gap-4 p-8 rounded-lg bg-white shadow-lg">
                            <img src={review.image} alt={review.alt} className="h-24 w-24 rounded-full mb-4" />
                            <p className="text-xl font-semibold text-center">{review.name}</p>
                            <p className="text-center">{review.review}</p>
                            <button className='bg-indigo-500 text-white text-lg px-6 py-2 rounded-xl hover:bg-indigo-600 transition duration-300'>Подробнее</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewBlock;
