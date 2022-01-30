import { FETCH_PROducts } from './types';



export const fetchProducts = () => {
    return (dispatch) => {
fetch('/api/products').then(res =>res.json()).then(data =>{
    dispatch: {
        type:FETCH_PROducts,
        data ; data
    }
})
    }
}