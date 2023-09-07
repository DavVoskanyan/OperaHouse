import {JSX} from "react";
import {classNameGenerator} from "@/app/utils/utils";
import {InFrameTitleProps} from "@/app/utils/types";
import styles from "./InFrameTitle.module.css";

export default function InFrameTitle({paragraphText, theme}: InFrameTitleProps): JSX.Element {
    return (
        <h1 className={classNameGenerator(styles.inFrameTitle, styles[theme])}>
            {paragraphText}
        </h1>
    );
}