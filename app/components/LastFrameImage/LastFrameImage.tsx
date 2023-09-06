import {JSX} from "react";
import Image from "next/image";
import {classNameGenerator} from "../../utils/utils";
import styles from "./LastFrameImage.module.css";

type propsType = {
    imageFileName: string,
    theme: "dark" | "light";
}

export default function LastFrameImage({imageFileName, theme}: propsType): JSX.Element {
    return (
        <Image
            className={classNameGenerator(styles.lastFrameImage, styles[theme])}
            src={`/images/${imageFileName}`}
            alt="LastImage"
            width={1640}
            height={924}
        />
    );
}