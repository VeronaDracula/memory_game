import React from 'react';

import './App.css';


import Main from '../Main/Main.js';
import {cardsData} from "../../utils/cards.js";

function App() {

  const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        setCards(shuffleArray(cardsData));
    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

  return (
      <div className="App">
          <div className="page">
              <div className="page__content">
                  {/*<Header/>*/}

                  <Main
                      cards={cards}
                  />

                  {/*<Footer/>*/}
              </div>
          </div>
      </div>
  );
}

export default App;
