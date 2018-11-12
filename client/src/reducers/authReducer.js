import { FETCH_USER, LOG_OUT } from '../actions/types';

export default function(state = null, action){
    console.log(action);
    switch(action.type){
        case FETCH_USER:
        return action.payload || false;
        case LOG_OUT:
        return false;
        default:
          return state;
    }
}