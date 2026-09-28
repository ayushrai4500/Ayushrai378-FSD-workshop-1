import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import User from "./components/User";
import UserSignup from "./components/userSignup";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<User />} />

        {/* Signup Page */}
        <Route path="/signup" element={<UserSignup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Home />} />

        {/* Unknown URL */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;