import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div class="list-group" id="list-tab" role="tablist">
      <NavLink
        className="list-group-item list-group-item-action"
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="list-group-item list-group-item-action"
        to="/view"
        activeClassName="active"
      >
        View Employees
      </NavLink>
      <NavLink
        className="list-group-item list-group-item-action"
        to="/add"
        activeClassName="active"
      >
        Add Employee
      </NavLink>
    </div>
  );
}

export default Menu;
