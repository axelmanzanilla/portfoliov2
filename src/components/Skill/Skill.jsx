import styles from "./Skill.module.css";

function Skill(props) {
    return (
        <li className={styles.skill}>
            <div className={styles["icon-container"]}>
                <img src={props.icon} alt={props.name} />
            </div>
            <div className={styles.overview}>
                <h3 className={styles.name}>{props.name}</h3>
                <div className={styles["percentage-container"]}>
                    <p
                        className={styles.percentage}
                        style={{ width: props.percentage }}
                    ></p>
                </div>
            </div>
        </li>
    );
}

export default Skill;
