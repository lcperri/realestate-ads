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
  CONTACT,
  PAY_LINK,
  CART,
  ONLY_CART,
  PROPERTY_COMMENTS,
  DENUNCIA,
  NAV
} from "./actionTypes";

const initialState = {
  loading: true,
  logged: false,
  notFound: false,
  error: {},
  filter: { location: "", max: "", filters: {} },
  properties: [],
  pages: [1, 1, 12],
  property: {},
  propertyComments: [],
  city: "",
  users: [],
  user: {},
  calendar: false,
  telephone: 0,
  forms: true,
  contacts: [],
  updateCurrentPage: false,
  calendar: [],
  authroized: false,
  link: '',
  cart: [],
  flag:[]
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
        pages: [1, 1, 12],
        property: {},
        city: "",
        users: [],
        user: {},
        cart: [],
        calendar: false,
        cardsCalendary: [],
      };
    case PROPERTIES:
      return {
        ...state,
        properties: payload,
        loading: false,
      };
    case CART:
      return {
        ...state,
        cart: payload.cart,
        properties: payload.properties,
        loading: false
      }
    case ONLY_CART:
      return {
        ...state,
        cart: payload,
        loading: false
      }
    case PAGE_SETTER:
      return {
        ...state,
        pages: payload,
      };
    case CONTACT:
      return {
        ...state,
        contacts: payload
      }
    case GET_CALENDAR:
      return {
        ...state,
        calendar: payload,
        authorized: true
      }
    case NAV:
      return {
        ...state,
        nav: payload
      }
    case CLEAR:
      return {
        ...state,
        loading: true,
        notFound: false,
        error: {},
        filter: { location: "", max: "", filters: {} },
        properties: [],
        pages: [1, 1, 12],
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
    case PAY_LINK:
      return {
        ...state,
        link: payload
      }
    case UPDATE_PAGE:
      return {
        ...state,
        updateCurrentPage: !state.updateCurrentPage
      };
    case PROPERTY_COMMENTS:
      return {
        ...state,
        propertyComments: payload
      };
      case DENUNCIA:
        return{
          ...state,
          flag: payload
        }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
