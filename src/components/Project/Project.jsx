import styles from "./Project.module.css";

function Project(props) {
    return (
        <li className={styles.project}>
            <a href={props.link} target="_blank" className={styles.link}>{props.name}</a>
        </li>
    );
}

export default Project;
