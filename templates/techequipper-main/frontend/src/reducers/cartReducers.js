import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from "../constants/cartConstants";


export const cartReducer = (state={cartItems:[], shippingAddress:{}}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            // item.product is referring to the ID of the product 
            const existItem = state.cartItems.find(x => x.product === item.product)
            // if yes it means it exists 
            if (existItem){
                // when the id of the cartItems matches the existItem.product (the id of the existItem) then pass the item 
                // with the given quantity etc, otherwise just keep the product that we have 
                return {...state, cartItems: state.cartItems.map(x=>x.product === existItem.product? item : x)}
            }else{
                return {...state, cartItems: [...state.cartItems, item]}
            }
        case CART_REMOVE_ITEM:
            return {
                ...state, cartItems: state.cartItems.filter(item => item.product !== action.payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state, shippingAddress: action.payload
            }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state, paymentMethod: action.payload
            }
        default: 
            return state;
    }
}



