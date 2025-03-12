import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./assets/components/login/Login";
import Games from "./assets/components/games/Games";
import Dashboard from "./assets/components/dashboard/Dashboard";
import Navbar from "./assets/components/navbar/Navbar";
import "./App.css";
import NewGame from "./assets/components/newGame/NewGame";
import Nosotros from "./assets/components/nosotros/Nosotros";
import UsersForm from "./assets/components/usersForm/UsersForm";

function App() {


  // hidenavbar se utiliza para ocultar el navbar durante el inicio de sesion para que los usuarios que no inicien sesion no puedan acceder a la app.
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gamesform" element={<NewGame />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/usersform" element={<UsersForm />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
