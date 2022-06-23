import axios from 'axios';
import url from './url';

export function getAllP(){
    return async function(dispatch){
        dispatch({type: LOADING});

        let resp = await axios.get(`${url}`);
        
    }
}