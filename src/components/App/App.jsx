import styles from "./App.module.css";
import Background from "../Background/Background";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import OtherProjects from "../OtherProjects/OtherProjects";
import Certificates from "../Certificates/Certificates";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import React, { useState } from "react";

function App() {
    const [bgColor, setBgColor] = useState("black");
    const [signature, setSignature] = useState("Axel M.");

    const changeBackground = color => {
        setBgColor(color);
    };

    const changeSignature = signature => {
        setSignature(signature);
    };

    return (
        <div className={styles.container} style={{ backgroundColor: bgColor }}>
            <Header signature={signature} />
            <main className={styles.main}>
                <Background
                    onChangeBackground={changeBackground}
                    onChangeSignature={changeSignature}
                />
                <Hero />
                <Skills />
                <Projects />
                <OtherProjects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
