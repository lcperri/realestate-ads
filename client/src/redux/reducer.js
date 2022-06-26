import { LOADING, PAGINATION, PROPERTIES, PROPERTY } from "./actionTypes";

const initialState = {
  loading: true,
  notFound: false,
  error: {},
  properties: [],
  pagination: [],
  property: {},
  city: "",
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
      return {
        ...state,
        pagination: payload,
        loading: false
      }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
