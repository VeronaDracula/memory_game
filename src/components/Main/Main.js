import React from 'react';
import './Main.css';


import CardsList from "../CardsList/CardsList.js";
import Footer from '../Footer/Footer.js';


function Main(props) {


    return (
        <main className="content">
            <section className="field">
                <CardsList cards={props.cards}/>
            </section>
        </main>
    );
}

export default Main;