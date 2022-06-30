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
  users:[{name: "pepe", tipoUsuario: "premium",}],
  user:{},
  favoritos: [{
    _id:"62b74f620a21495c42dde489",
    address:"Ruta Panamericana Km 36",
    area:"20x20",
    type:"Departamento",
    rooms:2,
    bathrooms:1,
    city:"Pcia. de Buenos Aires",
    neighbourhood:"Tortuguitas",
    constructionDate:2001,
    parkingSlot:false,
    price:600,
    pictures: ["https://img10.naventcdn.com/avisos/resize/111/00/08/00/42/12/1200x1200/221413042.jpg"]
  }],
  misPropiedades: [{
      _id:"62b74f620a21495c42dde489",
      address:"Ruta Panamericana Km 36",
      area:"20x20",
      type:"Departamento",
      rooms:2,
      bathrooms:1,
      city:"Pcia. de Buenos Aires",
      neighbourhood:"Tortuguitas",
      constructionDate:2001,
      parkingSlot:false,
      price:600,
      pictures: ["https://img10.naventcdn.com/avisos/resize/111/00/08/00/42/12/1200x1200/221413042.jpg"]
  }]
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
