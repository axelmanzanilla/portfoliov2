import styles from "./Signature.module.css";

function Signature(props) {
    return <h1 className={styles.name}>{props.signature}</h1>;
}

export default Signature;
