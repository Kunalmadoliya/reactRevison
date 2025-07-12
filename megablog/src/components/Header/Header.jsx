import React from "react";
import {Container, Logout} from "../index";
import Link from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = () => {
  let userStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !userAuth,
    },
    {
      name: "Register",
      slug: "/register",
      active: !userAuth,
    },
    {
      name: "Dashboard",
      slug: "/dashboard",
      active: userAuth,
    },
    {
      name: "Write Post",
      slug: "/write-post",
      active: userAuth,
    },
  ];

  return (
    <>
      <div className="border border-blue-700 bg-amber-800 "> 
        <Container>
          <nav>
            {navItems.map((items) =>
              items.active ? (
                <li key={items.name}>
                  <button onClick={() => navigate(items.slug)}>{items.name}</button>
                </li>
              ) : null
            )}
            {userStatus && (
              <button>
                <Logout />
              </button>
            )}
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Header;
