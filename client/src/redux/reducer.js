import { LOADING, PROPERTIES, PROPERTY } from "./actionTypes";

const initialState = {
  loading: true,
  notFound: false,
  error: {},
  properties: [],
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
      console.log(payload)
      return {
        ...state,
        properties: payload,
        loading: false,
      };
    case PROPERTY:
      return {
        ...state,
        property: payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
