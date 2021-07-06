import "./App.css";
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from './Pages/Cart/Cart'
import NotFound from './Pages/NotFound/NotFound'
import Market from './Pages/Market/Market'
import News from './Pages/News/News'
import Profile from './Pages/Profile/Profile'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path='/market'>
            <Market />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path="/categories/:categoryId">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
