import styles from './Styles/Footer.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerText}>
                    <p>Endereço: .................</p>
                    <p><span>@Petmania</span> Todos os direitos reservados @2024</p>
                </div>
                <div className={styles.footerIcons}>
                    <button><FaWhatsapp /></button>
                    <button><FaInstagram /></button>
                    <button><FaFacebook /></button>
                </div>
            </div>
        </div>
    )
}

export default Footer;