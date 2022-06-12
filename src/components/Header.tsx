import hat from "../assets/chef-hat.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <header
      className="header"
      style={{
        background:
          path === "/" || path === "/recipes/complexSearch" ? "#85BFB2" : "black",
        marginTop: 0,
        position: "relative",
      }}
    >
      <div className="icon-container">
        <div className="logo-name">
          <img src={hat} alt="chef hat" />
          <h1
            onClick={() => {
              navigate("/recipes/complexSearch");
            }}
          >
            Digital Chef
          </h1>
        </div>
        <Link to="/recipes/favorites">
          <i
            className={`fa-solid fa-heart${
              path !== "/" && path !== "/recipes/complexSearch" ? " dark" : ""
            }`}
          ></i>
        </Link>
      </div>
    </header>
  );
}
