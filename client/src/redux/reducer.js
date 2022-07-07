import { FILTER, LOADING, PROPERTIES, PROPERTY, ALL_USERS, USER, PAGE_SETTER, CLEAR, LOGIN, LOGOUT, GET_OWNERPHONE } from "./actionTypes";

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
  users:[{
    "name": "marcos",
    "lastName": "forastiere",
    "password": "1234",
    "birthday": "1411983",
    "email": "fmarcos.23@gmail.com",
    "dni": "29979518",
    "telephone": "2281460124",
    "range": "vip"
}],
  user:{},
  calendar: false,
  cardsCalendary: [{
    summary: 'Alquiler',
    location: 'dirección de tu casa',
    colorId: 1, 
    star: '2022-07-03',
    end: '2022-07-03',
    attendees: 'tumail@gmail.com' ,    
  },
  {
    summary: 'Venta',
    location: 'Acá iría la dirección de tu casa',
    colorId: '2', 
    star: '2022-07-03',
    end: '2022-07-03',
    attendees: 'tumail@gmail.com' ,    
  },
  {
    summary: 'Venta',
    location: 'Acá iría la dirección de tu casa',
    colorId: '2', 
    star: '2022-07-03',
    end: '2022-07-03',
    attendees: 'tumail@gmail.com' ,    
  }]
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
        logged: true
      }
    case LOGOUT:
      return {
        loading: true,
        logged: false,
        notFound: false,
        error: {},
        filter: { location: "", max: "", filters: {} },
        properties: [],
        pages: [1, 1, 10],
        property: {},
        city: "",
        users:[],
        user:{},
        calendar: false,
        cardsCalendary: []
      }
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
    case CLEAR:
      return {
        loading: true,
        notFound: false,
        error: {},
        filter: { location: "", max: "", filters: {} },
        properties: [],
        pages: [1, 1, 10],
        property: {},
        city: "",
        users:[],
        user:{},
        calendar: false,
        cardsCalendary: []
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
    case GET_OWNERPHONE:
      return{
        ...state,
        user:payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
