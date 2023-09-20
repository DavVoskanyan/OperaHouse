import {JSX} from "react";
import Image from "next/image";
import {classNameGenerator} from "../../utils/utils";
import {InFrameImageProps} from "@/app/utils/types";
import styles from "./FirstFrameImage.module.css";

export default function FirstFrameImage({imageFileName, theme}: InFrameImageProps): JSX.Element {
    return (
        <Image
            className={classNameGenerator(styles.firstFrameImage, styles[theme])}
            src={`/images/posters/${imageFileName}`}
            alt="PosterImage"
            width={666}
            height={1000}
        />
    );
}