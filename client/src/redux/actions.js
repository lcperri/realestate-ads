import axios from "axios";
import { url } from "./url";
import { ALL_PROPERTIES, LOADING, PROPERTY, FILTER } from "./actionTypes";

export function getAllProperties() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const properties = await axios.get(`${url}/property`);
    return dispatch({
      type: ALL_PROPERTIES,
      payload: properties,
    });
  };
}

export function getPropertyById(id) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const property = await axios.get(`${url}/property/${id}`);
    return dispatch({
      type: PROPERTY,
      payload: property,
    });
  };
}

export function createProperty() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const property = await axios.post(`${url}/property`);
    return dispatch({
      type: PROPERTY,
      payload: property,
    });
  };
}

export function filter(filterObject) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const json = await axios.get("ruta", filterObject);
    return dispatch({
      type: FILTER,
      payload: json,
    });
  };
}
