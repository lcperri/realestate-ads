import { FILTER, LOADING, PAGINATION, PROPERTIES, PROPERTY, ALL_USERS, USER } from "./actionTypes";

const initialState = {
  loading: true,
  notFound: false,
  error: {},
  filter: { location: "", max: "", filters: {} },
  properties: [],
  pagination: [],
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
        properties: payload
      };
    case PROPERTY:
      return {
        ...state,
        property: payload,
        loading: false
      };
    case PAGINATION:
      console.log(payload)
      return {
        ...state,
        pagination: payload,
        loading: false
      }
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
