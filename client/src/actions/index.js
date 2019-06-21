import axios from 'axios';
import { FETCH_USER } from './types';

//Define action creator and dispatch after response is completed from api
export const fetchUser = () => async  dispatch => {
        const res = await axios.get('/api/current_user');
        
        dispatch({ type: FETCH_USER, payload: res });
    };