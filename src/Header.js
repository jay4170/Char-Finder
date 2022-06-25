import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}
