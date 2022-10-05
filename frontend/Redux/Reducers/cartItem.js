import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

const cartItems = (state = [], action) => {
    switch (action.type) {
        
        case ADD_TO_CART:
            // console.log(...state,"hi")
            // if(state!=null){
            //     const item=state.filter.find(
            //         product=>product.id==action.payload.id
            //     )
            //     console.log(item)

            // }
           
          
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            console.log(state.cartItems)
            console.log("yes")
            return state.filter(cartItem => cartItem !== action.payload)
        case CLEAR_CART:
            return state = []
    }
    return state;
}

export default cartItems;