import styles from "./Background.module.css";
import React, { useState } from "react";

function Skills(props) {
    const [offset, setOffset] = useState("0px");

    window.onscroll = () => {
        setOffset(`-${parseInt(window.pageYOffset / 4)}px`);
    }

    const changeBgColor = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            props.onChangeBackground(e.target.innerText);
        }
    }

    const changeSignature = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            props.onChangeSignature(e.target.innerText);
        }
    }

    return (
        <code className={styles.background} style={{ top: offset }}>
            &lt;!DOCTYPE html&gt;<br/>
            &lt;html lang="en"&gt;<br/>
            &emsp;&lt;head&gt;<br/>
            &emsp;&emsp;&lt;meta charset="utf-8" /&gt;<br/>
            &emsp;&emsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;<br/>
            &emsp;&emsp;&lt;title&gt;Axel Manzanilla | Front End Developer&lt;/title&gt;<br/>
            &emsp;&emsp;&lt;style&gt;<br/>
            &emsp;&emsp;&emsp;body {"{"}<br/>
            &emsp;&emsp;&emsp;&emsp;margin: 0;<br/>
            &emsp;&emsp;&emsp;&emsp;padding: 0;<br/>
            &emsp;&emsp;&emsp;&emsp;background-color:
            <span className={styles.custom} onKeyDown={changeBgColor} contentEditable={true} suppressContentEditableWarning={true}> black</span>;<br/>
            &emsp;&emsp;&emsp;{"}"}<br/>
            &emsp;&emsp;&lt;/style&gt;<br/>
            &emsp;&lt;/head&gt;<br/>
            &emsp;&lt;body&gt;<br/>
            &emsp;&emsp;&lt;header&gt;<br/>
            &emsp;&emsp;&emsp;&lt;h1&gt;
            <span className={styles.custom} onKeyDown={changeSignature} contentEditable={true} suppressContentEditableWarning={true}>Axel M.</span>
            &lt;/h1&gt;<br/>
            &emsp;&emsp;&emsp;&lt;select&gt;<br/>
            &emsp;&emsp;&emsp;&emsp;&lt;option value="english"&gt;flag_usa&lt;/option&gt;<br/>
            &emsp;&emsp;&emsp;&emsp;&lt;option value="spanish"&gt;flag_mexico&lt;/option&gt;<br/>
            &emsp;&emsp;&emsp;&lt;/select&gt;<br/>
            &emsp;&emsp;&lt;/header&gt;<br/>
            &emsp;&emsp;&lt;main&gt;<br/>
            &emsp;&emsp;&lt;/main&gt;<br/>
            &emsp;&emsp;&lt;footer&gt;<br/>
            &emsp;&emsp;&lt;/footer&gt;<br/>
            &emsp;&lt;/body&gt;<br/>
            &lt;/html&gt;
        </code>
    );
}

export default Skills;
