import styles from "./LangSelector.module.css";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import Selector from "../Selector/Selector";

function LangSelector() {
    const [cookies, setCookie] = useCookies(["cookie-name"]);
    const { i18n } = useTranslation();
    let startIndex = 0;
    let languages = [
        {
            key: "en",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
            alt: "English",
        },
        {
            key: "es",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/320px-Flag_of_Mexico.svg.png",
            alt: "Español",
        },
    ];

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        setCookie("language", lang, { path: "/", maxAge: 99999999 });
    }

    if (cookies.language) {
        startIndex = languages.findIndex(lang => lang.key === cookies.language);
    }

    return (
        <Selector
            width="80px"
            height="38px"
            startIndex={startIndex}
            items={
                languages &&
                languages.map(flag => (
                    <div
                        className={styles["flag-container"]}
                        onClick={() => changeLanguage(flag.key)}
                    >
                        <img
                            className={styles.flag}
                            key={flag.key}
                            src={flag.src}
                            alt={flag.alt}
                        />
                    </div>
                ))
            }
        />
    );
}

export default LangSelector;
