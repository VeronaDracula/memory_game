import React from 'react';
import './Card.css';


function Card(props) {

    const cardCover = (
        `${props.isClick ? 'card__cover-box card__cover-box_inactive' : 'card__cover-box'}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card" id={props.id} onClick={handleClick}>
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