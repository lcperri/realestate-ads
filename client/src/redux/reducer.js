import { FILTER, LOADING, PAGINATION, PROPERTIES, PROPERTY } from "./actionTypes";

const initialState = {
  loading: true,
  notFound: false,
  error: {},
  filter: { location: "", max: "", filters: {} },
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
