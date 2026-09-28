import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function User() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Please signup first!");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          Signup
        </Link>
      </p>

    </div>
  );
}

export default User;