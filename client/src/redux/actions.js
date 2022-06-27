import axios from "axios";
import { url } from "./url";
import {
  FILTER,
  LOADING,
  PROPERTIES,
  PROPERTY,
  ALL_USERS,
  USER,
  PAGE_SETTER,
} from "./actionTypes";

export function getAllProperties() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const properties = await axios.post(`${url}/property/search`);
    return dispatch({
      type: PROPERTIES,
      payload: properties.data,
    });
  };
}

export function propertyPagination({ filters, location, max }) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const filtered = await axios.post(
      `${url}/property/search/?location=${location}&max=${max}`,
      filters
    );
    return dispatch({
      type: PROPERTIES,
      payload: filtered.data,
    });
  };
}

export function pageSetter(payload) {
  return {
    type: PAGE_SETTER,
    payload,
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

export function createProperty(info) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const property = await axios.post(`${url}/property`, info);
    return dispatch({
      type: PROPERTY,
      payload: property.data,
    });
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const resp = await axios.get(`${url}/user`);
    return dispatch({ type: ALL_USERS, payload: resp.data });
  };
}

export function createUser(data) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const resp = await axios.post(`${url}/user`, data);
    return dispatch({ type: USER, payload: resp.data });
  };
}

export function filter(filters, location, max) {
  return function (dispatch) {
    return dispatch({
      type: FILTER,
      payload: { filters, location, max },
    });
  };
}
