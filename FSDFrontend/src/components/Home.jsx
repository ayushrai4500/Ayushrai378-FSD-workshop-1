```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "30px" }}>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 18px",
          backgroundColor: "#e53935",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Logout
      </button>

      <h1>Dashboard</h1>

      <h2>
        Welcome, {user?.name} 👋
      </h2>

      <p>
        Email: {user?.email}
      </p>

    </div>
  );
}

export default Home;
```