import axios from "axios";
import { url } from "../helpers/url";
import {
  SaveToken,
  SaveId,
  SaveRange,
  SaveLastName,
  SaveName,
  RemoveToken,
} from "./../localStorage/index";
import {
  RemoveId,
  RemoveRange,
  RemoveLastName,
  RemoveName,
} from "./../localStorage/index";
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
  GET_OWNERPHONE,
  UPDATE_USER_BY_ID,
  CONTACT,
  UPDATE_PAGE,
  SWITCH_BETWEEN_FORMS,
  GET_CALENDAR,
  PAY_LINK,
  CART,
  ONLY_CART,
  PROPERTY_COMMENTS,
  DENUNCIA
} from "./actionTypes";

export function login(data) {
  return async function (dispatch) {
    const login = await axios.post(`${url}/login`, data);
    SaveToken(login.data[1]);
    SaveId(login.data[0]._id);
    SaveRange(login.data[0].range);
    SaveLastName(login.data[0].lastName);
    SaveName(login.data[0].name);
    const payload = login.data[0].authorized
    return dispatch({
      type: LOGIN,
      payload
    });
  };
}

export function signUpAction(data) {
  return async function (dispatch) {
    const login = await axios.post(`${url}/signup`, data);
    SaveToken(login.data[1]);
    SaveId(login.data[0]._id);
    SaveRange(login.data[0].range);
    SaveLastName(login.data[0].lastName);
    SaveName(login.data[0].name);
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
      type: CLEAR,
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

export function filterByCart(id, headers) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const cart = await axios.get(
      `${url}/property/cart/${id}`,
      headers
    );
    return dispatch({
      type: CART,
      payload: cart.data,
    });
  };
}

export function onlyCart(id, headers) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const cart = await axios.get(
      `${url}/property/onlycart/${id}`,
      headers
    );
    return dispatch({
      type: ONLY_CART,
      payload: cart.data,
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

export function createProperty(info, headers) {
  return async function (dispatch) {
    const id = localStorage.getItem("id");
    dispatch({ type: LOADING });
    const property = await axios.post(`${url}/property/${id}`, info, headers);
    return dispatch({
      type: PROPERTY,
      payload: property.data,
    });
  };
}

export function getAllUsers(headers) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const resp = await axios.get(`${url}/user`, headers);
    return dispatch({ type: ALL_USERS, payload: resp.data });
  };
}

export function deleteUser(id, headers){
  return async function(dispatch){
    const users = await axios.delete(`${url}/user/${id}`, headers);
    return dispatch({
      type: ALL_USERS,
      payload: users.data
    });
  }
}

export function deleteProp(headers, id){
  return async function(){
    await axios.delete(`${url}/property`,headers,id);
    
  }
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

export function getCalendar(id, headers) {
  return async function (dispatch) {
    try {
      const calendar = await axios.get(`${url}/calendar/${id}`, headers);
      return dispatch({
        type: GET_CALENDAR,
        payload: calendar.data,
      });
    } catch (error) {
      return dispatch({
        type: USER,
        payload: error.response.data
      })
    }
  }
}

export function calendar(code, id, headers) {
  return async function (dispatch) {
    const calendar = await axios.post(`${url}/calendar/${id}`, code, headers);
    return dispatch({
      type: USER,
      payload: calendar.data,
    });
  };
}

export function createEvent(code, headers) {
  return async function (dispatch) {
    const calendar = await axios.post(`${url}/calendar/event`, code, headers);
    return dispatch({
      type: LOGIN,
      payload: calendar.data,
    });
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const user = await axios.get(`${url}/user/${id}`);
    return dispatch({
      type: USER,
      payload: user.data,
    });
  };
}

export function updateUserById(id, data, headers) {
  return async function (dispatch) {
    dispatch({ type: LOADING });
    const user = await axios.put(`${url}/user/${id}`, data, headers);
    return dispatch({
      type: UPDATE_USER_BY_ID,
      payload: user.data,
    });
  };
}

export function contactForm(data, headers) {
  return async function (dispatch) {
    const favs = await axios.post(`${url}/contact`, data, headers);
    return dispatch({
      // type: CONTACT
    });
  };
}

export function seeContactsByProperty(id, headers) {
  return async function (dispatch) {
    const contacts = await axios.get(`${url}/contact/${id}`, headers);
    return dispatch({
      type: CONTACT,
      payload: contacts.data
    });
  };
}

export function logout(id) {
  return async function (dispatch) {
    RemoveToken();
    RemoveRange();
    RemoveLastName();
    RemoveName();
    RemoveId();
    await axios.get(`${url}/logout/${id}`);
    return dispatch({
      type: LOGOUT,
    });
  };
}

export function getownersphone(id) {
  return async function (dispatch) {
    const resp = await axios.get(`${url}/property/getownersphone/${id}`);
    return dispatch({
      type: GET_OWNERPHONE,
      payload: resp.data
    })
  }
}

export function GetUserById(id) {
  return async function (dispatch) {
    const user = await axios.get(`${url}/user/${id}`);
    return dispatch({
      type: USER,
      payload: user.data
    });
  };
}

export function addToUserFavourites(id, property, headers) {
  return async function (dispatch) {
    const favs = await axios.put(`${url}/user/addfavs/${id}`, property, headers);
    return dispatch({
      type: USER,
      payload: favs.data
    });
  };
}

export function addToUserCart(id, property, headers) {
  return async function (dispatch) {
    const cart = await axios.put(`${url}/user/addcart/${id}`, property, headers);
    return dispatch({
      type: USER,
      payload: cart.data
    });
  };
}

export function switchBetweenForms(){
  return function (dispatch) {
    return dispatch({
      type: SWITCH_BETWEEN_FORMS
    })
  }
}

export function updateCurrentPage () {
  return {
    type: UPDATE_PAGE
  };
}

export function subscription (data, headers) {
  return async function (dispatch) {
    const link = await axios.post(`${url}/subscription`, data, headers);
    return dispatch({
      type: PAY_LINK,
      payload: link.data,
    });
  };
}

export function updateSubscription (id, data, headers) {
  return async function (dispatch) {
    const link = await axios.put(`${url}/subscription/${id}`, data, headers);
    return dispatch({
      type: PAY_LINK,
      payload: link.data,
    });
  };
}

export function payment (data, headers) {
  return async function (dispatch) {
    const link = await axios.post(`${url}/payment`, data, headers);
    return dispatch({
      type: PAY_LINK,
      payload: link.data,
    });
  };
}

export function getPayment(id, headers) {
  return async function (dispatch) {
    const user = await axios.get(`${url}/payment/${id}`, headers);
    return dispatch({
      type: USER,
      payload: user.data
    });
  };
}

export function deleteLink (data) {
  return async function (dispatch) {
    return dispatch({
      type: PAY_LINK,
      payload: ''
    })
  }
}

export function addComments (data, idProperty, headers) {
  return async function (dispatch) {
    const comments = await axios.post(`${url}/comment/${idProperty}`, data, headers);
    return dispatch({
      type: PROPERTY_COMMENTS,
      payload: comments.data
    });
  };
}

export function addDenuncia (data, idProperty, headers) {
  return async function (dispatch){
    const resp = await axios.post(`${url}/formDenuncia/${idProperty}`, data, headers);
    return dispatch({
      type: DENUNCIA,
      payload: resp.data
    });
  }
}

// export function uploadImages (data) {
//   return async function (dispatch) {
//     const imagesUrl = await axios.post(`${url}/uploadimages`, data);
//     return dispatch({
//       type: UPLOAD_IMAGES,
//       payload: imagesUrl,
//     });
//   };
// }