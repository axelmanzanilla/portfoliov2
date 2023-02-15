import styles from "./Footer.module.css";

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            &lt;/&gt; with ❤️ by Axel Manzanilla<br />
             Axel Manzanilla | Frontend Developer &copy; {year}
        </footer>
    );
}

export default Footer;
