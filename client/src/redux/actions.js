import axios from "axios";
import { url } from "../helpers/url";
import headers from "../localStorage/login";
import { SaveRefreshToken, SaveToken, SaveId, SaveRange, SaveLastName, SaveName } from './../localStorage/index';
import {
  ALL_USERS,
  FILTER,
  LOADING,
  LOGIN,
  PROPERTIES,
  PROPERTY,
  USER,
  PAGE_SETTER,
} from "./actionTypes";

export function login(data) {
  return async function (dispatch) {
    const login = await axios.post(`${url}/login`, data);
    SaveToken(login.data[1]);
    SaveRefreshToken(login.data[2]);
    SaveId(login.data[0]._id);
    SaveRange(login.data[0].range);
    SaveLastName(login.data[0].lastName);
    SaveName(login.data[0].name);
    return dispatch({
      type: LOGIN,
      payload: login.data
    })
  };
}

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

export function filterByOwner({ filters, location, max }, id) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const filtered = await axios.post(
      `${url}/property/${id}/search/?location=${location}&max=${max}`,
      filters,
      headers
    );
    return dispatch({
      type: PROPERTIES,
      payload: filtered.data,
    });
  };
}

export function filterByFollower({ filters, location, max }, id) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    
    const filtered = await axios.post(
      `${url}/property/${id}/favourites/?location=${location}&max=${max}`,
      filters,
      headers
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
    const id = localStorage.getItem('id');
    dispatch({ type: LOADING });
    const property = await axios.post(`${url}/property/${id}`, info);
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

export function calendar(code, id) {
  return async function (dispatch) {
    const calendar = await axios.post(`${url}/calendar/${id}`, code);
    return dispatch({
      type: LOGIN,
      payload: calendar.data
    })
  };
}

export function createEvent(code) {
  return async function (dispatch) {
    const calendar = await axios.post(`${url}/calendar/62b77256748ecce00e66f578/event`, code);
    return dispatch({
      type: LOGIN,
      payload: calendar.data
    })
  };
}