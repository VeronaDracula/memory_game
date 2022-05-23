import React from 'react';
import './Card.css';


function Card(props) {

    const [isClick, setIsClick] = React.useState(false);

    const cardClassName = (
        isClick ? `card ${props.name} card_active` : `card ${props.name}`
    );

    const cardImgSrc = (
        isClick ? `${props.img}` : `${props.cover}`
    );

    // console.log(cardClassName)

    function handleOpenClick() {
        const cards = document.querySelectorAll('.card');
        // console.log(cards)
        if (isClick) {
            setIsClick(false);
        }
        else {
            setIsClick(true);
        }
    }

    return (
        <li className={cardClassName} onClick={handleOpenClick}>
            <img className="card__img" src={cardImgSrc} alt={props.name}/>
        </li>
    );
}

export default Card;