"use client";

import {JSX, useEffect, useState} from "react";

import framesInfo from "@/public/framesInfo.json";

import GalleryFrame from "@/app/components/GalleryFrame/GalleryFrame";
import InFrameImage from "@/app/components/InFrameImage/InFrameImage";
import InFrameParagraph from "@/app/components/InFrameParagraph/InFrameParagraph";
import LastFrameImage from "@/app/components/LastFrameImage/LastFrameImage";
import InFrameTitle from "@/app/components/InFrameTitle/InFrameTitle";

import styles from "./page.module.css";

export default function Home(): JSX.Element {
    function generateFrameContent(
        index: number, arrayLength: number,
        imageFileName: string,
        paragraphText: string,
        theme: "dark" | "light"): JSX.Element {

        if(index === arrayLength - 1) {
            return (
                <LastFrameImage imageFileName={imageFileName} theme={"dark"}/>
            );
        }
        if(index === 0) {
            return (
                <>
                    <InFrameImage
                        imageFileName={imageFileName}
                        theme={"dark"}/>
                    <InFrameTitle
                        paragraphText={paragraphText}
                        theme={"dark"}/>
                </>
            );
        }
        return (
            <>
                <InFrameImage
                    imageFileName={imageFileName}
                    theme={"dark"}/>
                <InFrameParagraph
                    paragraphText={paragraphText}
                    theme={"dark"}/>
            </>
        );
    }
    function checkOpacity(zValue: number, zSpacing: number): boolean {
        return zValue < Math.abs(zSpacing) / 1.3;
    }

    type frameObject = {
        imageFileName: string,
        paragraphText: string
    }

    const framesArray: Array<frameObject> = Array.from(framesInfo.frames)
    const [zValuesArray, changeArray]: any = useState(framesArray.map((): number => 0));
    const zSpacing: number = -1000;

    useEffect(() => {
        const scrollHandler = (): void => {
            let lastPosition: number = zSpacing / 5;
            const top: number = document.documentElement.scrollTop;
            const delta: number = lastPosition - top;
            lastPosition = top;

            const newZValues: Array<number> =
                framesArray.map((frame: frameObject, index: number): number => (index + 1) * zSpacing + delta * -5);
            changeArray(newZValues);
        }
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {
                    framesArray.map((frame: frameObject, index: number): JSX.Element => {
                        if(index === framesArray.length - 1) {

                        }
                        return (
                            <GalleryFrame
                                key={index}
                                zValue={index === framesArray.length - 1 ? zValuesArray[index] - 500 : zValuesArray[index]}
                                opacity={checkOpacity(zValuesArray[index], zSpacing) ? 1 : 0}
                                theme={"dark"}>

                                {generateFrameContent(
                                    index,
                                    framesArray.length,
                                    frame.imageFileName,
                                    frame.paragraphText,
                                    "dark"
                                )}

                            </GalleryFrame>
                        );
                    })
                }
            </div>
        </main>
    );
}
