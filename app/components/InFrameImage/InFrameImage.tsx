import {JSX} from "react";
import Image from "next/image";
import {classNameGenerator} from "../../utils/utils";
import styles from "./InFrameImage.module.css";

type propsType = {
    imageFileName: string,
    theme: "dark" | "light";
}

export default function InFrameImage({imageFileName, theme}: propsType): JSX.Element {
    return (
        <Image
            className={classNameGenerator(styles.inFrameImage, styles[theme])}
            src={`/images/posters/${imageFileName}`}
            alt="PosterImage"
            width={666}
            height={1000}
        />
    );
}