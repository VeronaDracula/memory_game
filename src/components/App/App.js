import React from 'react';

import './App.css';


import Main from '../Main/Main.js';
import {cardsData} from "../../utils/cards.js";

function App() {

  const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        setCards(cardsData);
    }, []);


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
