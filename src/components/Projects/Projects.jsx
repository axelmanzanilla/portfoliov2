import styles from "./Projects.module.css";
import Project from "../Project/Project";

function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Projects</h2>
            <ul className={styles["project-list"]}>
                <Project name="Impregnarte" link="https://impregnarte.com" />
                <Project name="Softparadox" link="https://softparadox.com" />
                <Project
                    name="Solo protesis dental"
                    link="https://www.figma.com/proto/he8DbKWZihf5EJ9hZJccbT/SoloProtesisDental?node-id=1%3A3&scaling=scale-down&page-id=0%3A1"
                />
            </ul>
        </section>
    );
}

export default Projects;
