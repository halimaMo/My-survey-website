import axios from 'axios';
import { FETCH_USER } from './types';

//Define action creator and dispatch after response from api
export const fetchUser = ( )=> {
    return function(dispatch) {
        axios.get('/api/current_user')
        .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};