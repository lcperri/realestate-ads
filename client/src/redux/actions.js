import axios from "axios";
import { url } from "./url";
import { LOADING, PROPERTIES, PROPERTY } from "./actionTypes";

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

export function createProperty() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const property = await axios.post(`${url}/property`);
    return dispatch({
      type: PROPERTY,
      payload: property.data,
    });
  };
}

export function filter(filters, location) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const filtered = await axios.get(`${url}/property/?location=${location}`, filters);
    return dispatch({
      type: PROPERTIES,
      payload: filtered.data,
    });
  };
}
