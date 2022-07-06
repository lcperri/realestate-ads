import axios from "axios";
import { url } from "../helpers/url";
import { SaveId, SaveRange, SaveLastName, SaveName } from './../localStorage/index';
import { RemoveId, RemoveRange, RemoveLastName, RemoveName } from './../localStorage/index';
import {
  ALL_USERS,
  FILTER,
  LOADING,
  LOGIN,
  PROPERTIES,
  PROPERTY,
  USER,
  PAGE_SETTER,
  CLEAR,
  LOGOUT,
} from "./actionTypes";

export function login(data) {
  return async function (dispatch) {
    const login = await axios.post(`${url}/login`, data, { withCredentials: true });
    SaveId(login.data._id);
    SaveRange(login.data.range);
    SaveLastName(login.data.lastName);
    SaveName(login.data.name);
    return dispatch({
      type: LOGIN
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

export function clear() {
  return function (dispatch) {
    return dispatch({
      type: CLEAR
    });
  };
}

export function filterByOwner({ filters, location, max }, id, headers) {
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

export function filterByFollower({ filters, location, max }, id, headers) {
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

export function getCalendar(id) {
  return async function (dispatch) {
    const calendar = await axios.get(`${url}/calendar/${id}`);
    return dispatch({
      type: LOGIN,
      payload: calendar.data
    })
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

export function createEvent(id, code) {
  return async function (dispatch) {
    const calendar = await axios.post(`${url}/calendar/${id}/event`, code);
    return dispatch({
      type: LOGIN,
      payload: calendar.data
    })
  };
}

export function logout() {
  return async function (dispatch) {
    RemoveRange();
    RemoveLastName();
    RemoveName();
    const id = localStorage.getItem('id');
    await axios.get(`${url}/logout/${id}`);
    RemoveId();
    return dispatch({
      type: LOGOUT
    });
  };
}