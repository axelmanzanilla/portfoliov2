import styles from "./Skills.module.css";
import Skill from "../Skill/Skill";

function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <ul className={styles["skill-list"]}>
                <Skill name="HTML/CSS" percentage="80%" icon="html.webp" />
                <Skill name="JavaScript" percentage="80%" icon="javascript.webp" />
                <Skill name="Node.js" percentage="70%" icon="nodejs.webp" />
                <Skill name="React" percentage="80%" icon="react.webp" />
                <Skill name="Vue.js" percentage="40%" icon="vuejs.webp" />
                <Skill name="Python" percentage="70%" icon="python.webp" />
                <Skill name="Flask" percentage="50%" icon="flask.webp" />
                <Skill name="MySQL" percentage="80%" icon="mysql.webp" />
            </ul>
        </section>
    );
}

export default Skills;
