import React from 'react';
import './Card.css';


function Card(props) {

    const cardClass = (
        `${props.isClick ? 'card card_active' : 'card'}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className={cardClass} onClick={handleClick}>
            <div className="card__cover-box">
                <img className="card__cover" src={props.cover} alt={props.name}/>
            </div>

            <div className="card__img-box">
                <img className="card__img" src={props.img} alt={props.name}/>
            </div>
        </li>
    );
}

export default Card;