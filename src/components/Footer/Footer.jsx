import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* الجزء الخاص بالاسم والتعريف */}
        <div className="footer-section about">
          <h2 className="footer-logo">M.<span>Allam</span></h2>
          <p>
            مطور واجهات مستخدم شغوف ببناء تجارب ويب فريدة وسلسة، أركز دائماً على جودة الكود وجمال التصميم.
          </p>
        </div>

        {/* التواصل الاجتماعي */}
        <div className="footer-section social">
          <h3>Contact & Social</h3>
          <div className="social-icons">
            <a href="https://github.com/mohamedfrontenddev-byte" target="_blank" rel="noreferrer" aria-label="Github">
              <FaGithub />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamed.frontend.dev@gmail.com" target='_blank' rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
     
            </a>
            <a href="" target="_blank" rel="noreferrer" aria-label="Linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

  
      <div className="footer-bottom">
        <p>&copy; {currentYear} Created with ❤️ by <span>Mohamed Allam</span></p>
      </div>
    </footer>
  );
};

export default Footer;