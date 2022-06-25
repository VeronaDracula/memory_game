import React from 'react';
import './CardsList.css';


import Card from "../Card/Card.js";


function CardsList(props) {

    const [openCards, setOpenCards] = React.useState([]);
    const [matchCards, setMatchCards] = React.useState([]);

    React.useEffect(() => {

        const amountCards = openCards.length;

        if (amountCards === 2) {
            if(openCards[0].name === openCards[1].name) {
                setMatchCards([...matchCards, openCards[0].name]);
                setOpenCards([]);
            } else {
                setTimeout(() => setOpenCards([]), 1000);
            }
        }
    }, [openCards]);


    function handleCardClick(card) {
        setOpenCards([...openCards, card]);
    }

    return (
        <ul className="cards">

            {props.cards.map((card) =>  {

                let isClick = false;
                 if(openCards.includes(card)) isClick = true;
                 if(matchCards.includes(card.name)) isClick = true;

                    return (
                        <Card card={card}
                              name={card.name}
                              img={card.img}
                              cover={card.cover}
                              id = {card.id}
                              key={card.id}
                              onCardClick={handleCardClick}
                              isClick = {isClick}
                        />
                    )
            })}
        </ul>
    );
}

export default CardsList;