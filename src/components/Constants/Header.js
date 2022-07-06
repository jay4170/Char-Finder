import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <div className="grid grid-cols-2  bg-gray-200 text-center   w-full ">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}
