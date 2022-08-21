import React, { useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HRvttIVnuUPSojMPvcAffZZUpTVcj05ZLRP95UkC8HscVsPlRSEAbmT1hYMtoGDZJy4ijJMqwCuO1XSbWl4xExt00U7WNXXls');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/oreders'>
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <h1>I am the payment route</h1>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
