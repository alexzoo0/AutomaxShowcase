import * as api from '../api/index.js';
import { CREATE, FETCH_ALL } from '../constants/actionTypes.js';



export const createReview = (newReview) => async (dispatch) => {
    try{
        const { data } = await api.createReview(newReview);

        dispatch({ type: CREATE, payload: data })
    } catch(error) {
        console.log(error.message);
    }
};

export const getReviews = () => async (dispatch) => {

    try {
        const { data } = await api.getReviews();
        
        
        dispatch({ type: FETCH_ALL, payload: data })

       
    } catch (error) {
        console.log(error.message);

    }


};

