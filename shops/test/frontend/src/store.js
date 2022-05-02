import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducer, productDetailsReducer, productReviewCreateReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer, userUpdateReducer } from "./reducers/userReducers";
import {orderCreateReducer} from "./reducers/orderReducers.js"
import { orderDetailsReducer } from "./reducers/orderReducers.js";
import { orderPayReducer } from "./reducers/orderReducers.js";
import { orderListMyReducer } from "./reducers/orderReducers.js";
import {userListReducer} from "./reducers/userReducers.js";
import { userDeleteReducer } from "./reducers/userReducers";
import {productDeleteReducer, productCreateReducer, productUpdateReducer} from "./reducers/productReducers";
import { orderListReducer } from "./reducers/orderReducers.js";
import { orderDeliverReducer } from "./reducers/orderReducers.js";

const reducer  = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList : orderListReducer,
    orderDeliver: orderDeliverReducer,
    productReviewCreate: productReviewCreateReducer
    
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ? 
JSON.parse(localStorage.getItem("cartItems")) : 
[];

const userInfoFromStorage = localStorage.getItem("userInfo") ? 
JSON.parse(localStorage.getItem("userInfo")) : 
null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? 
JSON.parse(localStorage.getItem("shippingAddress")) : 
{};

// so i have the initial State from the browser and it doesnt go away 
const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage
    },
    userLogin: {userInfo: userInfoFromStorage},
    
}; 

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store ; 