import styles from "./Hero.module.css";
import Picture from "../Picture/Picture";
import React, { useState, useEffect } from "react";

function Hero() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );
 
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", e => setMatches(e.matches));
    }, []);

    return (
        <div className={styles.hero} style={{ height: "calc(100vh - 100px)" }}>
            <div className={styles.description}>
                <h2 className={styles.position}>Frontend Developer</h2>
                <h3 className={styles.about}>
                    I am a mechatronics engineering/ frontend developerwho enjoys
                    doing electronics and programming projects. I have
                    experience programming microcontrollers, web pages and
                    android phones.
                </h3>
                <button className={styles.download}><a href="/Resume Axel Manzanilla.pdf" download>Download CV</a></button>
            </div>
            <Picture height={matches ? "30vw" : "100vw"} />
        </div>
    );
}

export default Hero;
