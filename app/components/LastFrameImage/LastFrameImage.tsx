import {JSX} from "react";
import Image from "next/image";
import {classNameGenerator} from "../../utils/utils";
import {LastFrameImageProps} from "@/app/utils/types";
import styles from "./LastFrameImage.module.css";

export default function LastFrameImage({imageFileName, theme}: LastFrameImageProps): JSX.Element {
    return (
        <Image
            className={classNameGenerator(styles.lastFrameImage, styles[theme])}
            src={`/images/posters/${imageFileName}`}
            alt="LastImage"
            width={1640}
            height={924}
        />
    );
}