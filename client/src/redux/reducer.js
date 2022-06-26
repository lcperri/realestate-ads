import { FILTER, LOADING, PROPERTIES, PROPERTY, ALL_USERS, USER, PAGE_SETTER } from "./actionTypes";

const initialState = {
  loading: true,
  notFound: false,
  error: {},
  filter: { location: "", max: "", filters: {} },
  properties: [],
  pages: [1, 1, 10],
  property: {},
  city: "",
  users:[],
  user:{}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case PROPERTIES:
      return {
        ...state,
        properties: payload,
        loading: false
      };
    case PAGE_SETTER:
      return {
        ...state,
        pages: payload
      }
    case PROPERTY:
      return {
        ...state,
        property: payload
      };
    case FILTER:
      return {
        ...state,
        filter: payload
      }
    case ALL_USERS:
      return{
        ...state,
        users: payload,
        loading: false,
      }
      case USER:
      return{
        ...state,
        user: payload,
        loading: false,
      }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
