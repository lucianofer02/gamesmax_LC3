import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./assets/components/login/Login";
import Games from "./assets/components/games/Games";
import Dashboard from "./assets/components/dashboard/Dashboard";
import Navbar from "./assets/components/navbar/Navbar";
import NewGame from "./assets/components/newGame/NewGame";
import Nosotros from "./assets/components/nosotros/Nosotros";
import UsersForm from "./assets/components/usersForm/UsersForm";
import "./App.css";
import ProtectedRoute from "./assets/components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "./assets/components/unauthorized/unauthorized";
import PageNotFound from "./assets/components/notFound/NotFound";
import Gamesform from "./assets/components/gamesForm/GamesForm";
import Cart from "./assets/components/Cart/Cart";

function App() {



  return (
    <>
        <AuthProvider>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={
            <ProtectedRoute requiredRoles={["client","admin", "superadmin"]}>
              <Dashboard />
            </ProtectedRoute>
            } />
          <Route path="/games" element={
            <ProtectedRoute requiredRoles={["client","admin", "superadmin"]}>
              <Games />
            </ProtectedRoute>
            } />
          <Route path="/gamesform" element={
            <ProtectedRoute requiredRoles={["admin", "superadmin"]}>
              <Gamesform />
            </ProtectedRoute> 
            } />
          <Route path="/nosotros" element={
            <ProtectedRoute requiredRoles={["client","admin", "superadmin"]}>
            <Nosotros />
            </ProtectedRoute> 
            } />
          <Route path="/usersform" element={
            <ProtectedRoute requiredRoles={["superadmin"]}>
            <UsersForm />
          </ProtectedRoute>
            } />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;
