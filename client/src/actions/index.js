import axios from 'axios';
import { FETCH_USER, LOG_OUT } from './types';


export const fetchUser = () => async dispatch => {
       const res = await axios.get('/api/current_user');
       dispatch({type: FETCH_USER, payload: res.data});
    };

export const logoutUser = () => async dispatch => {
    const res = await axios.get('/api/logout');
    const {status} = res;
    console.log(status);
    if(status === 200){
        dispatch({type: LOG_OUT, payload: true});
    }
    
};    