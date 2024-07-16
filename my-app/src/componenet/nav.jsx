import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              onClick={() => {
                navigate("form");
              }}
            >
              Form
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item m-3">
                  <button
                    onClick={() => {
                      navigate("login");
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item m-2">
                  <button
                    className="nav-link active"
                    onClick={() => {
                      navigate("/child");
                    }}
                  >
                    Child
                  </button>
                </li>
                <li className="nav-item m-2">
                  <button
                    className="nav-link active"
                    onClick={() => {
                      navigate("/parent");
                    }}
                  >
                    Parent
                  </button>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </nav>
      <Outlet />
    </>
  );
}
