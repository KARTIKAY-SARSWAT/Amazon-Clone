import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() {

    const [{ basket, user }] = useStateValue();

    console.log(basket);
    console.log(user);

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">

            {/*logo on left */}
            {/*Link tag provided by react router to convert it to a link */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
            
            
            {/*searchbar */}
            <div className="header__searchBox">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            
            {/* 3 links */} 
            <div className="header__nav">

                {/* 1st link */}
                {/*if there is no user then only go to the login page */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email : 'guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*basket */}
                        <ShoppingBasketIcon />
                        {/*No. of items in basket*/}
                        {/* ? -> this is to add optional as it takes sometime for initialise the length */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>




            {/*cart icon with numbers */}
        </nav>
    )
}

export default Header