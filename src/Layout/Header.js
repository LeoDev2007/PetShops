import { useState } from "react";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri"; 

import styles from "./Styles/Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className={styles.menuDesktop}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/"><MdPets /></Link>
          </div>
          <div className={styles.menu}>
            <ul>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/pets" className={styles.link}>Pets</Link></li>
              <li><Link to="/products" className={styles.link}>Produtos</Link></li>
            </ul>
          </div>
          <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
            <GiHamburgerMenu size={30} color="#FFF" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.menuMobile}>
          <button className={styles.closeButton} onClick={toggleMobileMenu}>
            <RiCloseLine size={30} color="#FFF" />
          </button>
          <ul>
            <li><Link to="/" className={styles.link} onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/pets" className={styles.link} onClick={toggleMobileMenu}>Pets</Link></li>
            <li><Link to="/products" className={styles.link} onClick={toggleMobileMenu}>Produtos</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
