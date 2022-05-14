import React from 'react';

import './App.css';


import Main from '../Main/Main.js';


function App() {

  // const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
  // const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  // const [isPopupErrorOpen, setIsPopupErrorOpen] = React.useState(false);
  // const [errorText, setErrorText] = React.useState('');
  // const [cards, setCards] = React.useState([]);
  // const [ourCards, setOurCards] = React.useState([]);
  // const [currentUser, setCurrentUser] = React.useState({});
  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [infoTooltipText, setInfoTooltipText] = React.useState('');




  return (
      <div className="App">

          <div className="page">
              {/*<Header/>*/}

              <Main/>

              {/*<Footer/>*/}




          </div>
      </div>
  );
}

export default App;
