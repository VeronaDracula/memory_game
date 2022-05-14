import React from 'react';
// import {Link} from "react-router-dom";
import './Header.css';

// import headerLogo from '../../images/logo.svg';



function Header(props) {
    return (
        <header className="header">
            <div className="header__container header__container_type_not-main">
                <div className="header__content header__content_type_movies page__content page__content_type_header">
                    <div>
                        {/*<Link to="/" className="logo__link logo_type_movies page__link">*/}

                        {/*</Link>*/}
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;