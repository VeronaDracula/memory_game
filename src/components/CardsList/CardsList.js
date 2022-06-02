import React from 'react';
import './CardsList.css';


import Card from "../Card/Card.js";


function CardsList(props) {

    const [cards, setCards] = React.useState(props.cards);


    React.useEffect(() => {

        setCards(props.cards);

    }, []);

    let openCards = [];

    function handleCardClick(card) {
        const amountCards = openCards.length;

        if (amountCards === 0){
            openCards.push(card.name);

            // console.log(true)
            return false
        }
        else if (amountCards !== 0){

            openCards.forEach(openCard => {
                if(openCard === card.name) {
                    //карточки совпали, исчезают
                    console.log(true)

                    return true

                } else if(openCard !== card.name) {
                    //карточки не совпали, закрываем
                    console.log(false)

                    return false

                }

            })
        }
    }




    // setCards(shuffleArray(props.cards));

    // const cards = shuffleArray(props.cards);


    return (
        <ul className="cards">
            {cards.map((card) => (<Card card={card}
                                              name={card.name}
                                              img={card.img}
                                              cover={card.cover}
                                              id = {card.id}
                                              key={card.id}
                                              onCardClick={handleCardClick}
                />)
            )}
        </ul>
    );
}

export default CardsList;