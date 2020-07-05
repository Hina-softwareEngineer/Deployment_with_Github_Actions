import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <Link to="mobile">Mobile</Link>
      <Link to="computer">Computer</Link>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Home to About
      </button>
    </div>
  );
}

export default Home;
