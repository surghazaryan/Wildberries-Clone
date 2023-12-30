import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.scss";
import "../sidebar/sidebar.scss";
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const cart_items = useSelector((state) => {
    return state.cart.cart_items;
  });
  const count = cart_items.length;

  const handleSearch = () => {
    if (search.trim().length !== 0) {
      navigate("search-results", { state: search });
      setSearch("");
    }
  };
  const handleSearchTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };
  const onHandleKeyDown = async (evt: React.KeyboardEvent) => {
    if (evt.key === "Enter") {
      navigate("search-results", { state: search });
      setSearch("");
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-cnt flex align-center w-100">
          <div className="brand-and-toggler flex align-center">
            <Hamburger
              toggled={sidebar}
              toggle={setSidebar}
              direction="right"
              size={30}
              color="white"
              duration={0.3}
            />
            <Link to="/" className="navbar-brand flex align-center">
              <span className="navbar-brand-txt mx-2 text-white">
                <span>Wildberries</span>
              </span>
            </Link>
          </div>
          <div className="navbar-collapse">
            <div className="navbar-search bg-white">
              <div className="flex align-center">
                <input
                  type="text"
                  className="form-control fs-14"
                  placeholder="search or wildberries"
                  value={search}
                  onChange={(e) => {
                    handleSearchTerm(e);
                  }}
                  onKeyDown={onHandleKeyDown}
                />
                <button
                  onClick={handleSearch}
                  className="text-white search-btn flex align-center justify-center border-0"
                >
                  <FaSearch className="search-icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="navbar-cart flex align-center">
            <Link to="/corzina" className="cart-btn">
              <MdLocalGroceryStore className="icon" />
              <div className="cart-items-value">{count}</div>
            </Link>
          </div>
        </div>
      </nav>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        {sidebar && <Sidebar />}
      </div>
    </>
  );
};

export default NavBar;
