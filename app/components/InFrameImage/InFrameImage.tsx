import {JSX} from "react";
import Image from "next/image";
import {classNameGenerator} from "../../utils/utils";
import {InFrameImageProps} from "@/app/utils/types";
import styles from "./InFrameImage.module.css";

export default function InFrameImage({imageFileName, theme}: InFrameImageProps): JSX.Element {
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