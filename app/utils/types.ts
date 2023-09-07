import {JSX} from "react";

export type Theme = "dark" | "light";

export type ChangeThemeButtonProps = {
    theme: Theme,
    changeTheme: (theme: Theme) => void;
}

export type GalleryFrameProps = {
    theme: Theme,
    children: JSX.Element | Array<JSX.Element>,
    zValue: number,
    isVisible: 0 | 1,
}

export type InFrameImageProps = {
    imageFileName: string,
    theme: Theme,
}

export type InFrameParagraphProps = {
    paragraphText: string,
    theme: Theme,
}

export type InFrameTitleProps = {
    paragraphText: string,
    theme: Theme,
}

export type LastFrameImageProps = {
    imageFileName: string,
    theme: Theme,
}



export type FrameObject = {
    imageFileName: string,
    paragraphText: string,
}