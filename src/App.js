import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/register" element={<Register/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/profile" element={<Profile/>}>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
