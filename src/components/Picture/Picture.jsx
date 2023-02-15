import styles from "./Picture.module.css";
import React, { useState, useEffect } from "react";

function Picture(props) {
    const relationAspect = 0.75;
    const circleHeight = `calc(${relationAspect}*${props.height})`;
    const arcHeight = `calc(${relationAspect / 2}*${props.height})`;
    const imgMargin = `calc(-0.1*${props.height})`;

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", e => setMatches(e.matches));
    }, []);

    return (
        <div
            className={styles.picture}
            style={{
                width: circleHeight,
                height: props.height,
            }}
        >
            <div
                className={styles.container}
                style={{ width: props.height, height: props.height }}
            >
                <span
                    className={styles.background}
                    style={{
                        width: circleHeight,
                        height: circleHeight,
                    }}
                ></span>
                <span
                    className={styles.border}
                    style={{
                        width: circleHeight,
                        height: arcHeight,
                    }}
                ></span>
                <img
                    className={styles.image}
                    style={{
                        height: props.height,
                        // marginBottom: matches ? imgMargin : "0",
                        marginBottom: imgMargin,
                    }}
                    src="picture.png"
                    alt="Axel Manzanilla profile picture"
                />
            </div>
        </div>
    );
}

export default Picture;
