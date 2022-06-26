import axios from "axios";
import { url } from "./url";
import { FILTER, LOADING, PAGINATION, PROPERTIES, PROPERTY, ALL_USERS, USER } from "./actionTypes";

export function getAllProperties() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const properties = await axios.get(`${url}/property`);
    return dispatch({
      type: PROPERTIES,
      payload: properties.data,
    });
  };
}

export function propertyPagination(skip, { filters, location, max }) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const filtered = await axios.post(`${url}/property/search/?skip=${skip}&location=${location}&max=${max}`, filters);
    console.log(filtered.data)
    return dispatch({
      type: PAGINATION,
      payload: filtered.data,
    });
  };
}

export function getPropertyById(id) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const property = await axios.get(`${url}/property/${id}`);
    return dispatch({
      type: PROPERTY,
      payload: property.data,
    });
  };
}

export function createProperty(data) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const property = await axios.post(`${url}/property`, data);
    return dispatch({
      type: PROPERTY,
      payload: property.data,
    });
  };
}

export function getAllUsers(){
  return async function(dispatch){
    dispatch({ type: LOADING });
    const resp = await axios.get(`${url}/user`);
    return dispatch({type: ALL_USERS, payload: resp.data});
  }
}

export function createUser(data){
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const resp = await axios.post(`${url}/user`, data);
    return dispatch({type: USER, payload: resp.data });
  };
}

export function filter(filters, location, max) {
  return function (dispatch) {
    return dispatch({
      type: FILTER,
      payload: { filters, location, max }
    });
  };
}