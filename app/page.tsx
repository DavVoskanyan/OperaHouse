"use client";

import {Dispatch, JSX, SetStateAction, useEffect, useState} from "react";
import framesInfo from "@/public/framesInfo.json";
import {isVisible, setThemeInLocalStorage, getThemeFromLocalStorage, classNameGenerator} from "@/app/utils/utils";
import {FrameObject, Theme} from "@/app/utils/types";
import GalleryFrame from "@/app/components/GalleryFrame/GalleryFrame";
import InFrameImage from "@/app/components/InFrameImage/InFrameImage";
import InFrameParagraph from "@/app/components/InFrameParagraph/InFrameParagraph";
import LastFrameImage from "@/app/components/LastFrameImage/LastFrameImage";
import InFrameTitle from "@/app/components/InFrameTitle/InFrameTitle";
import ChangeThemeButton from "@/app/components/ChangeThemeButton/ChangeThemeButton";
import FirstFrameImage from "@/app/components/FirstFrameImage/FirstFrameImage";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
    const [theme, changeTheme]: [Theme, Dispatch<SetStateAction<Theme>>] = useState(getThemeFromLocalStorage());
    function themeChanger(currentTheme: Theme): void {
        if(currentTheme === "dark") {
            changeTheme("light");
            setThemeInLocalStorage("light");
        }
        else {
            changeTheme("dark");
            setThemeInLocalStorage("dark");
        }

    }
    function generateFrameContent(
        index: number, arrayLength: number,
        imageFileName: string,
        paragraphText: string,
        theme: Theme): JSX.Element {

        if(index === arrayLength - 1) {
            return (
                <LastFrameImage imageFileName={imageFileName} theme={theme}/>
            );
        }
        if(index === 0) {
            return (
                <>
                    <FirstFrameImage
                        imageFileName={imageFileName}
                        theme={theme}/>
                    <InFrameTitle
                        paragraphText={paragraphText}
                        theme={theme}/>
                </>
            );
        }
        return (
            <>
                <InFrameImage
                    imageFileName={imageFileName}
                    theme={theme}/>
                <InFrameParagraph
                    paragraphText={paragraphText}
                    theme={theme}/>
            </>
        );
    }

    const framesArray: Array<FrameObject> = Array.from(framesInfo.frames)
    const [zValuesArray, changeArray]: any = useState(framesArray.map((): number => 0));
    const zSpacing: number = -1000;

    useEffect(() => {
        const scrollHandler = (): void => {
            let lastPosition: number = zSpacing / 5;
            const top: number = document.documentElement.scrollTop;
            const delta: number = lastPosition - top;

            const newZValues: Array<number> = framesArray.map(
                (frame: FrameObject, index: number): number => (index + 1) * zSpacing + delta * -5
            );
            changeArray(newZValues);
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    return (
        <main className={classNameGenerator(styles.main, styles[theme])}>
            <div className={styles.container}>
                {
                    framesArray.map((frame: FrameObject, index: number): JSX.Element => {
                        if(index === framesArray.length - 1) {

                        }
                        return (
                            <GalleryFrame
                                key={index}
                                zValue={index === framesArray.length - 1 ? zValuesArray[index] - 500 : zValuesArray[index]}
                                isVisible={isVisible(zValuesArray[index], zSpacing) ? 1 : 0}
                                theme={theme}>

                                {generateFrameContent(
                                    index,
                                    framesArray.length,
                                    frame.imageFileName,
                                    frame.paragraphText,
                                    theme
                                )}

                            </GalleryFrame>
                        );
                    })
                }
            </div>
            <ChangeThemeButton theme={theme} changeTheme={themeChanger}/>
        </main>
    );
}