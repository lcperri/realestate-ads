import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./pages/LandingPage/index"
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Loader from "./pages/Loader";
import UserCreate from "./components/UserCreate";
import UserCard from "./dumb/CardUser";
import Login from "./pages/Login";
import Nav from "./components/Nav/index";
import Planes from "./components/Planes";
import Favoritos from "./pages/Favoritos";
import MisPropsPV from "./pages/MisPropPremiumVip";
import ProfileDataUpdate from "./pages/ProfileDataUpdate/ProfileDataUpdate";
// import showCookies from "./functions/showCookies";
import { useDispatch } from 'react-redux/es/exports';
import { logout } from "./redux/actions";
import { useEffect } from "react";
import Terms from "./components/TermsConditions/Terms";
import Users from "./pages/Users";
import CalendarCards from "./libs/CalendarCards";
import Contact from "./pages/Contact";
import ContactCards from "./pages/ContactCards";
import ContactCard from "./dumb/CardContact";
import Success from "./components/Success/Success";
import CardDenuncia from "./dumb/CardDenuncia";
import Cart from "./pages/Cart/Cart";

const App = () => {
  const dispatch = useDispatch();
  // const auth = showCookies('auth-token');
  const token = localStorage.getItem('auth-token');
  const id = localStorage.getItem('id');

  useEffect(() => {
    // if (!auth.length) {
    if (!token) {
      dispatch(logout(id));
    }
  }, [token]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publicar" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/registro" element={<UserCreate />} />
        <Route path="/user" element={<UserCard />} />
        <Route path="/sesion" element={<Login />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mispropiedades" element={<MisPropsPV />} />
        <Route path="/calendario" element={<CalendarCards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/administrador" element={<Users />} />
        <Route path="/perfil" element={<ProfileDataUpdate />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/contacto/:id" element={<ContactCards />} />
        <Route path="/success" element={<Success/>} />
        {/* <Route path='*' element={<Home/>} />  */}
        <Route path="/contactCard" element={<ContactCard />} />
        <Route path="/cardDenuncia" element={<CardDenuncia />} />
      </Routes>
    </>
  );
};

export default App;
