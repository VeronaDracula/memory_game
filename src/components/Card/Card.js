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
        // props.onCardClick(props.card)

console.log(props.onCardClick(props.card))

        setIsClick(props.onCardClick(props.card));

        // if (isClick) {
        //     setIsClick(false);
        // }
        // else {
        //     setIsClick(true);
        // }
    }


    function handleOpenClick() {
        // const cards = document.querySelectorAll('.card_active');
        //
        // searchForMatches(cards);
        // console.log(cards)
        // if (isClick) {
        //     setIsClick(false);
        // }
        // else {
            setIsClick(true);
        // }
    }

    return (
        <li className="card" id={props.id} onClick={function(){ handleOpenClick(); setTimeout(handleClick, 2000); }}>
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