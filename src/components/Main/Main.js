import React from 'react';
import './Main.css';


import Card from "../Card/Card.js";
import Footer from '../Footer/Footer.js';

function Main(props) {

    // const [cards, setCards] = React.useState([]);

    // function round() {
    //     const cardImg = document.querySelector('.card__img');
    //     cardImg.setAttribute('src', props.card.img);
    // }

    // function openCard(card) {
    //
    // }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const cards = shuffleArray(props.cards);


    return (
        <main className="content">
            <section className="gallery">
                <ul className="cards">
                    {cards.map((card) => (<Card card={card}
                                                      name={card.name}
                                                      img={card.img}
                                                      cover={card.cover}
                                                      key={card.id}
                        />)
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;