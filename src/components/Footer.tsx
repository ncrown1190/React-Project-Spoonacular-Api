import "./Footer.css";
import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-name">Digital Chef</div>
      <div className="icons-container">
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={twitterIcon} alt="Twitter Icon" />
        <img src={facebookIcon} alt="Facebook Icon" />
      </div>
    </footer>
  );
}
