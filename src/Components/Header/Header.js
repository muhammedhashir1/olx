import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";

import { AuthContext, FirebaseContext } from "../../store/Context";
function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <Link style={{ textDecoration: "none" }} to="/" className="brandName">
          <OlxLogo></OlxLogo>
        </Link>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        {/* <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Hindi
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Malayalam
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Tamil
              </a>
            </li>
          </ul>
        </div> */}
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <Link
          style={{ textDecoration: "none",fontWeight:'bold',Color:'black' }}
          className="loginPage"
          to="/login"
        >
          <span>{user ? `Welcome ${user.displayName}` : "Login"}</span>
          <hr />
        </Link>
        {user && (
          <span
            onClick={() => {
              firebase.auth().signOut();
              history.push("/login");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/login">
              Logout
            </Link>
          </span>
        )}
        <Link
          style={{ textDecoration: "none" }}
          className="sellMenu"
          to="/create"
        >
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
