import "./App.css";
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from './Pages/Cart/Cart'
import NotFound from './Pages/NotFound/NotFound'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
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
