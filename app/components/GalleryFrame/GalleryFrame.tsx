import {JSX} from "react";
import {classNameGenerator} from "@/app/utils/utils";
import styles from "./GalleryFrame.module.css";

type propsType = {
    theme: "dark" | "light",
    children: JSX.Element | Array<JSX.Element>,
    zValue: number,
    opacity: 0 | 1;
}

export default function GalleryFrame({theme, children, zValue, opacity}: propsType): JSX.Element {
    const styleObject = {
        translate: `0 0 ${zValue}px`,
        opacity: opacity
    }

    return (
        <div className={classNameGenerator(styles.galleryFrame, styles[theme])} style={styleObject}>
            {children}
        </div>
    );
}