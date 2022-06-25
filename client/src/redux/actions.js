import axios from 'axios';
import {url} from './url';
import {
    ALL_PROPERTIES,
    LOADING,
    PROPERTY
} from './actionTypes';

export function getAllProperties(){
    return async function(dispatch){
        dispatch({ type: LOADING });
        const properties = await axios.get(`${url}/property`);
        return dispatch({
            type: ALL_PROPERTIES,
            payload: properties
        });
    }
}

export function getPropertyById(id){
    return async function(dispatch){
        dispatch({ type: LOADING });
        const property = await axios.get(`${url}/property/${id}`);
        return dispatch({
            type: PROPERTY,
            payload: property
        });
    }
}

export function createProperty(data){
    return async function(dispatch){
        dispatch({ type: LOADING });
       
            let property =  await axios.post(`${url}/property`,data);
            return property;
        
        
         
    }
}