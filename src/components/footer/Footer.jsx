import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";

import "./style.scss";

const menuBottom = [
  { id: 1, name: "Terms of use" },
  { id: 2, name: "About" },
  { id: 3, name: "Blog" },
  { id: 4, name: "FAQs" },
];

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <figure>
          <img src={Logo} alt="logo filmway" />
        </figure>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
        <div className="signature">
          Developed by{" "}
          <a href="#" target="_blank">
            Amangoua Ange
          </a>
          <span style={{ marginLeft: "5px" }}> | Copyright {date}</span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
