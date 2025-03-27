import React from "react";
import styled from "styled-components";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container1">
        {/* Right Section - Social & Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@eventify.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="social-icons">
            <a href="#"><Facebook className="icon" /></a>
            <a href="#"><Twitter className="icon" /></a>
            <a href="#"><Instagram className="icon" /></a>
            <a href="#"><LinkedIn className="icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Eventify. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
}

// Styled Components
const FooterWrapper = styled.footer`
  background: #1a1a1a;
  color: #ffffff;
  padding: 20px 0;
  font-family: "Arial", sans-serif;

  .container1 {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom:0px;
  }

  .footer-section {
    flex: 1;
    min-width: 250px;
    margin-bottom: 0px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #f39c12;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  .social-icons a {
    color: #ffffff;
    font-size: 24px; /* Adjust icon size */
    margin: 0 10px;
    transition: color 0.3s ease-in-out;
  }

  .social-icons a:hover {
    color: #f39c12;
  }

  .icon {
    font-size: 28px; /* Adjust Material UI icon size */
  }

  .footer-bottom {
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    border-top: 1px solid #444;
    font-size: 14px;
  }
`;
