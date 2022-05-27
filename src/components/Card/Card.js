import React from 'react';
import './Card.css';


function Card(props) {

    const [isClick, setIsClick] = React.useState(false);
    //загружать в стейт переменную нажатые карточки и по этому массиву пробегаться

    // const cardClassName = (
    //     isClick ? `card ${props.name} card_active` : `card ${props.name}`
    // );

    // const cardImgSrc = (
    //     isClick ? `${props.img}` : `${props.cover}`
    // );

    const cardCover = (
        `${isClick ? 'card__cover-box card__cover-box_inactive' : 'card__cover-box'}`
    );

    function handleClick() {
        props.onCardClick(props.card);

        // if (isClick) {
        //     setIsClick(false);
        // }
        // else {
        //     setIsClick(true);
        // }
    }

    // function searchForMatches(cards) {
    //     console.log(cards.length)
    //     if(cards.length > 0) {
    //         cards.forEach(card => {
    //             const imgCard = card.querySelector('.card__img');
    //             card.classList.remove('card_active');
    //             imgCard.setAttribute('src', props.cover);
    //         })
    //     }
    // }

    // console.log(cardClassName)

    function handleOpenClick() {
        // const cards = document.querySelectorAll('.card_active');
        //
        // searchForMatches(cards);
        // console.log(cards)
        if (isClick) {
            setIsClick(false);
        }
        else {
            setIsClick(true);
        }
    }

    return (
        <li className="card" onClick={function(){ handleOpenClick(); handleClick(); }}>
            <div className={cardCover}>
                <img className="card__cover" src={props.cover} alt={props.name}/>
            </div>

            <div className="card__img-box">
                <img className="card__img" src={props.img} alt={props.name}/>
            </div>
        </li>
    );
}

export default Card;