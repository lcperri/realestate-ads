import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Loader from "./pages/Loader";
import UserCreate from "./components/User";
import UserCard from "./components/CardUser";
import Login from "./pages/Login";
import Nav from './components/Nav/index';
import CalendarForm from './components/Calendar/index';
import Favoritos from "./components/Favoritos";
import MisPropsPV from "./components/MisPropPremiumVip";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/calendar" element={<CalendarForm />} />
        <Route path="/loader" element={<Loader />} /> 
        <Route path="/signup" element={<UserCreate />} />
        <Route path="/user" element={<UserCard/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="planes" element={<Planes/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/mipropsvip" element={<MisPropsPV/>} />
        {/* <Route path='*' element={<Home/>} />  */}
      </Routes>
    </>
  );
};

export default App;
