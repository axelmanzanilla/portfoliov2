import styles from "./OtherProjects.module.css";

function OtherProjects() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Other Projects</h2>
            <ul>
                <li>Line Follower Car</li>
                <li>Videogame in PSoC 4</li>
                <li>Caribbean War</li>
            </ul>
        </section>
    );
}

export default OtherProjects;
