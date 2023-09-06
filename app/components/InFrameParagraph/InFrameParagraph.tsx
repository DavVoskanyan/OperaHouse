import {JSX} from "react";
import {classNameGenerator} from "../../utils/utils";
import styles from "./InFrameParagraph.module.css";

type propsType = {
    paragraphText: string,
    theme: "dark" | "light",
}
export default function InFrameParagraph({paragraphText, theme}: propsType): JSX.Element {
    return (
        <p className={classNameGenerator(styles.inFrameParagraph, styles[theme])}>
            {paragraphText}
        </p>
    );
}