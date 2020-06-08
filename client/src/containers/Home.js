import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Code Academy Joensuu 2020</h1>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
