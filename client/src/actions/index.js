import axios from 'axios';
import { FETCH_USER } from './types';

//Define action creator and dispatch action after response is completed from api
export const fetchUser = () => async  dispatch => {
    // res is the request made to the backend server    
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
    };

    export const handleToken = (token) => async dispatch => {
         const res = await axios.post('/api/stripe', token);

         dispatch({ type: FETCH_USER, payload: res.data });
    };
