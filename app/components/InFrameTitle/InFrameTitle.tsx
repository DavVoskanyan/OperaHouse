import {JSX} from "react";
import {classNameGenerator} from "@/app/utils/utils";

import styles from "./InFrameTitle.module.css";

type propsType = {
    paragraphText: string,
    theme: "dark" | "light",
}
export default function InFrameTitle({paragraphText, theme}: propsType): JSX.Element {
    return (
        <h1 className={classNameGenerator(styles.inFrameTitle, styles[theme])}>
            {paragraphText}
        </h1>
    );
}