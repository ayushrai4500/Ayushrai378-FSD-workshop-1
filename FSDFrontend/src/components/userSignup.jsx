import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserSignup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please login.");

    navigate("/");
  };

  return (
    <div>

      <h1>Create Account</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Signup
        </button>

      </form>

      <p>
        Already have an account?{" "}
        <Link to="/">
          Login
        </Link>
      </p>

    </div>
  );
}

export default UserSignup;