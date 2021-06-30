import "./App.css";
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import NotFound from './Pages/NotFound/NotFound'
import Market from './Pages/Market/Market'
import News from './Pages/News/News'
import Coins from './Pages/Coins/Coins'
import Profile from './Pages/Profile/Profile'
import Category from './Pages/Category/Category'
import Item from './Pages/Item/Item'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/market'>
            <Market />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/coins'>
            <Coins />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path="/categories/:categoryId">
            <Category />
          </Route>
          <Route path="/item/:itemName">
            <Item />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
