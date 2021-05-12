//  https://clone-73fac.web.app/

import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //run only once when the app components loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);

      if(authUser){
        //the user just logged in/ the user was logged in
        
        dispatch({
          type:'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out

        dispatch({
          type:'SET_USER',
          user: null
        })

      }

    });
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
    
  );
}

export default App;
