import React from 'react';
import './Main.css';


import Card from "../Card/Card.js";
import Footer from '../Footer/Footer.js';


function Main(props) {

    let openCards = [];

    function handleCardClick(card) {
        openCards.push(card.name);
        console.log(openCards);
    }


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // setCards(shuffleArray(props.cards));

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
                                                onCardClick={handleCardClick}
                        />)
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;