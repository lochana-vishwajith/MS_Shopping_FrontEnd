import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import Header from "./Components/HeaderComponent/headerComponent";
import Home from "./Components/HomeComponent/home";
import itemDescription from "./Components/ItemDescriptionComponent/itemDescription";
import ItemBuy from "./Components/ItemBuyComponent/itemBuy";
import LoginCom from "./Components/loginComponent/login";
import Register from "./Components/RegisterComponent/register";
import Cart from "./Components/CartComponent/cart";
//------------IT18014396

import DeliveryHome from "./Components/DeliveryHomeComponent/DeliveryHome";
//----------------------

import SellerHome from "./Components/SellerHome/SellerHome";
import SellerAddNewItem from "./Components/SellerAddItemComponent/AddNewItem";
//import SellerView from "./Components/SellerView/SellerViewComponent";
import SellerDeleteItem from "./Components/SellerDeleteItemComponent/SellerDeleteItem";
import SellerViewItems from "./Components/SellerViewItems/SellerViewItems";
//////////////////////////

import { initialState, reducer } from "../src/Reducer/UseReducer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/itemDescription/:id"
              component={itemDescription}
            />
            <Route exact path="/itemBuy/:id" component={ItemBuy} />
            <Route exact path="/login" component={LoginCom} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/delivery/:id" component={DeliveryHome} />

            <Route exact path="/sellerhome" component={SellerHome} />
            <Route path="/AddNewItem" component={SellerAddNewItem} />
            <Route path="/ViewItems" component={SellerViewItems} />
            {/* <Route path="/ViewList" component={SellerView} /> */}
            <Route path="/DeleteItem" component={SellerDeleteItem} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
