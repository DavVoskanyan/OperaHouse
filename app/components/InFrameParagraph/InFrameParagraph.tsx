import {JSX} from "react";
import {classNameGenerator} from "../../utils/utils";
import {InFrameParagraphProps} from "@/app/utils/types";
import styles from "./InFrameParagraph.module.css";

export default function InFrameParagraph({paragraphText, theme}: InFrameParagraphProps): JSX.Element {
    return (
        <p className={classNameGenerator(styles.inFrameParagraph, styles[theme])}>
            {paragraphText}
        </p>
    );
}