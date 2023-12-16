import { combineReducers, legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import { getAllPizzasReducers } from './reducers/pizzaReducers';
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrderReducer } from './reducers/orderReducer';


const finalReducer = combineReducers({
  getAllPizzasReducers: getAllPizzasReducers,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer:loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrderReducer: getUserOrderReducer

});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser ') ? JSON.parse(localStorage.getItem('currentUser ')) : null;
 
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer:
  {
    currentUser: currentUser,
  },
};

// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
