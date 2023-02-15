import { useState } from "react";
import styles from "./Selector.module.css";

function LanguageSelector(props) {
    const [expanded, setExpanded] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const [hoverId, setHoverId] = useState(-1);

    function selectOption(id) {
        setSelectedId(id);
        setHoverId(id);
    }

    useState(() => {
        if (props.startIndex >= 0 && props.startIndex < props.items.length) {
            setSelectedId(props.startIndex);
            setHoverId(props.startIndex);
        }
    }, []);

    return (
        <section
            className={styles.select}
            style={{
                width: props.width || "fit-content",
                height: props.height || "fit-content",
                overflow: expanded ? "visible" : "hidden",
            }}
            onClick={() => setExpanded(!expanded)}
            onBlur={() => setExpanded(false)}
            tabIndex="0"
        >
            {props.placeholder && selectedId < 0 ? props.placeholder : ""}
            {selectedId >= 0 ? props.items[selectedId] : ""}
            <i className={styles.down + " bx bx-chevron-down"} />
            <ul className={styles.list}>
                {props.items ? (
                    props.items.map((item, id) => (
                        <li
                            className={styles.element}
                            style={{
                                color: id === hoverId ? "white" : "black",
                                backgroundColor:
                                    id === hoverId ? "#003A46" : "black",
                            }}
                            key={id}
                            onClick={() => selectOption(id)}
                            onMouseEnter={() => setHoverId(id)}
                        >
                            {item}
                        </li>
                    ))
                ) : (
                    <li className={styles.element} />
                )}
            </ul>
        </section>
    );
}

export default LanguageSelector;
