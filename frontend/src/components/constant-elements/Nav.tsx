import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { myContext } from "../Context";
import axios, { AxiosResponse } from "axios";

const Navbar = () => {
  const context = useContext(myContext);

  const logout = () => {
    axios
      .get("http://localhost:5050/logout", {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data === "success") {
          window.location.href = "/";
        }
      });
  };

  return (
    <NavigationBar>
      <h1>IronFeedback</h1>

      <NavigationMenu>
        <NavigationLink to="/">Home</NavigationLink>
        {context ? (
          <>
            <NavigationLink to="/form" className="nav-link">
              Form
            </NavigationLink>
            <NavigationLink to="/overview" className="nav-link">
              Overview
            </NavigationLink>
            <NavigationLink onClick={logout} to="/logout" className="nav-link">
              Logout
            </NavigationLink>
          </>
        ) : (
          <>
            <NavigationLink to="/signup" className="nav-link">
              Signup
            </NavigationLink>
            <NavigationLink to="/login" className="nav-link">
              Login
            </NavigationLink>
          </>
        )}
      </NavigationMenu>
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--strawberry);
  flex-shrink: 0;
`;

const NavigationMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavigationLink = styled(NavLink)`
  padding: 1rem;
`;

export default Navbar;
