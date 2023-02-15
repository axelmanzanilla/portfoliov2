import styles from "./Header.module.css";
import Signature from "../Signature/Signature";
import LangSelector from "../LangSelector/LangSelector";

function Header(props) {
    return (
        <header className={styles.header}>
            <Signature signature={props.signature} />
            <LangSelector />
        </header>
    );
}

export default Header;
