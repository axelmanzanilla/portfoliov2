import styles from "./Certificates.module.css";

function Certificates() {
    return (
        <section className={styles.certificates}>
            <h2 className={styles.title}>Certificates</h2>
            <ul>
                <li>Version Control - 2023</li>
                <li>Programming with JavaScript - 2022</li>
                <li>Full Stack Web Developer - 2021</li>
            </ul>
        </section>
    );
}

export default Certificates;
