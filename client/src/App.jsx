import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Loader from "./pages/Loader";
import UserCreate from "./components/User";
import UserCard from "./dumb/CardUser";
import Login from "./pages/Login";
import Nav from "./components/Nav/index";
import Planes from "./components/Planes";
import Favoritos from "./pages/Favoritos";
import MisPropsPV from "./pages/MisPropPremiumVip";
import ProfileDataUpdate from "./pages/ProfileDataUpdate/ProfileDataUpdate";
import Calendar from "./libs/CalendarPost";
// import showCookies from "./functions/showCookies";
import { useDispatch } from 'react-redux/es/exports';
import { logout } from "./redux/actions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  // const auth = showCookies('auth-token');
  const token = localStorage.getItem('auth-token');

  useEffect(() => {
    // if (!auth.length) {
    if (!token) {
      return () => dispatch(logout());
    }
  }, [token]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publicar" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/registro" element={<UserCreate />} />
        <Route path="/user" element={<UserCard />} />
        <Route path="/sesion" element={<Login />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/mispropiedades" element={<MisPropsPV />} />
        <Route path="/calendario" element={<Calendar />} />

        <Route path="/perfil" element={<ProfileDataUpdate />} />

        {/* <Route path='*' element={<Home/>} />  */}
      </Routes>
    </>
  );
};

export default App;
