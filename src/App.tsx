import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./views/home";
import Login from "./views/login";
import SignUp from "./views/signup";
import Profile from "./views/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
