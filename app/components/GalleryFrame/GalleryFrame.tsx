import {JSX} from "react";
import {classNameGenerator} from "@/app/utils/utils";
import type {GalleryFrameProps} from "@/app/utils/types";
import styles from "./GalleryFrame.module.css";

export default function GalleryFrame({theme, children, zValue, isVisible}: GalleryFrameProps): JSX.Element {
    const styleObject: typeof styles = {
        translate: `0 0 ${zValue}px`,
        opacity: isVisible.toString(),
    }

    return (
        <div className={classNameGenerator(styles.galleryFrame, styles[theme])} style={styleObject}>
            {children}
        </div>
    );
}