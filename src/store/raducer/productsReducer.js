
import { FETCH_PROducts } from './../action/types';

export const productsReducer = (state={} , action) => {
    switch(action.type) {
        case FETCH_PROducts:
            return {products: action.data} 


            default :
            return state
    }
}