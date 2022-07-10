import {
  FILTER,
  LOADING,
  PROPERTIES,
  PROPERTY,
  ALL_USERS,
  USER,
  PAGE_SETTER,
  CLEAR,
  LOGIN,
  LOGOUT,
  GET_OWNERPHONE,
  UPDATE_USER_BY_ID,
  SWITCH_BETWEEN_FORMS,
  UPDATE_PAGE,
  GET_CALENDAR,
} from "./actionTypes";

const initialState = {
  loading: true,
  logged: false,
  notFound: false,
  error: {},
  filter: { location: "", max: "", filters: {} },
  properties: [],
  pages: [1, 1, 10],
  property: {},
  city: "",
  users: [],
  user: {},
  calendar: false,
  telephone: 0,
  forms: true,
  updateCurrentPage: false,
  calendar: [],
  authroized: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN:
      return {
        ...state,
        logged: true,
        authorized: payload
      };
    case LOGOUT:
      return {
        logged: false,
        loading: true,
        notFound: false,
        error: {},
        filter: { location: "", max: "", filters: {} },
        properties: [],
        pages: [1, 1, 10],
        property: {},
        city: "",
        users: [],
        user: {},
        calendar: false,
        cardsCalendary: [],
      };
    case PROPERTIES:
      return {
        ...state,
        properties: payload,
        loading: false,
      };
    case PAGE_SETTER:
      return {
        ...state,
        pages: payload,
      };
    case GET_CALENDAR:
      return {
        ...state,
        calendar: payload,
        authorized: true
      }
    case CLEAR:
      return {
        ...state,
        loading: true,
        notFound: false,
        error: {},
        filter: { location: "", max: "", filters: {} },
        properties: [],
        pages: [1, 1, 10],
        property: {},
        city: "",
        users: [],
        user: {},
        calendar: false,
        cardsCalendary: []
      };
    case PROPERTY:
      return {
        ...state,
        property: payload,
      };
    case FILTER:
      return {
        ...state,
        filter: payload,
      };
    case ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case USER:
      return {
        ...state,
        user: payload,
        authorized: payload.authorized,
        loading: false,
      };
    case UPDATE_USER_BY_ID:
      return {
        ...state,
        loading: false,
      };
    case SWITCH_BETWEEN_FORMS:
      payload = state.forms
      payload === false ? payload = true : payload = false
      return {
        ...state,
        forms: payload
      }
    case GET_OWNERPHONE:
      return {
        ...state,
        telephone: payload,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        updateCurrentPage: !state.updateCurrentPage
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
