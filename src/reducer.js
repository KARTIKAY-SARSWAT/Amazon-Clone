export const initialState = {
    basket: [],
    user: null
};

//main purpose of selector here is for total of a price of cart
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };  
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket

            //here we actually cloned our basket
            let newBasket = [ ...state.basket ];

            //here we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                //item exists in basket, remove it...
                newBasket.splice(index,1);
            } else {
                console.warn('Cant remove product');
            }

            return {
                ...state,
                basket: newBasket
            };
            
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;