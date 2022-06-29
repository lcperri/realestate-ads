import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Loader from "./pages/Loader";
import UserCreate from "./components/User";
import UserCard from "./components/CardUser";
import Login from "./components/Login";
<<<<<<< HEAD
import Planes from "./components/Planes";
import CardsFavoritos from "./components/CardsFavoritos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/loader" element={<Loader />} /> 
      <Route path="/signup" element={<UserCreate />} />
      <Route path="/user" element={<UserCard/>} />
      <Route path="/login" element= {<Login/>} />
      <Route path="/planes" element= {<Planes/>} />
      <Route path="/cardfavorites" element= {<CardsFavoritos/>} />
      <Route path='*' element={<Home/>} /> 
    </Routes>
=======
import Nav from './components/Nav/index';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/loader" element={<Loader />} /> 
        <Route path="/signup" element={<UserCreate />} />
        <Route path="/user" element={<UserCard/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path='*' element={<Home/>} /> 
      </Routes>
    </>
>>>>>>> e0fdb10ba56640fd1e1fdf7e76b752577f58be39
  );
};

export default App;
