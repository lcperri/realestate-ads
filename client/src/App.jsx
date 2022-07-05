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
import CalendarForm from "./components/CalendarPost/index";
import Planes from "./components/Planes";
import Favoritos from "./pages/Favoritos";
import MisPropsPV from "./pages/MisPropPremiumVip";
import ProfileDataUpdate from "./pages/ProfileDataUpdate/ProfileDataUpdate";
import CalendaryCards from "./libs/CalendaryCards";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publicar" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/calendar" element={<CalendarForm />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/registro" element={<UserCreate />} />
        <Route path="/user" element={<UserCard />} />
        <Route path="/sesion" element={<Login />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/mispropidades" element={<MisPropsPV />} />
        <Route path="/calendario" element={<CalendaryCards />} />

        <Route path="/perfil" element={<ProfileDataUpdate />} />

        {/* <Route path='*' element={<Home/>} />  */}
      </Routes>
    </>
  );
};

export default App;
