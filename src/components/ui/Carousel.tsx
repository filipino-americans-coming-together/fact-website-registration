"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

const IMG_HEIGHT = 3456;
const IMG_WIDTH = 5184;
const PLACEHOLDER_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9vG2BwACbwEDalojHwAAAABJRU5ErkJggg==";
const TRANSPARENT_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

interface CarouselProps {
    title: string;
    src: string;
    length: number;
    numImages: number;
}

/**
 * Image carousel
 * @param title title to display above carousel
 * @param src folder in public to display images from
 * @param length number of images in the folder (labeled 1.JPG, 2.JPG, ..., [length].JPG)
 * @returns LinkButton
 */
export default function Carousel({ title, src, length, numImages }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(1);

    return (
        <>
            <div className={`text-${(numImages == 1 ? "2xl" : "4xl")}`}>{title}</div>
            <div className="flex flex-row justify-between my-8 h-fit">
                <div
                    className="w-fit cursor-pointer self-center text-2xl lg:text-4xl"
                    onClick={() =>
                        setCurrentIndex(() =>
                            currentIndex - numImages < 1
                                ? ~~((length - 1) / numImages) * numImages + 1
                                : currentIndex - numImages
                        )
                    }
                >
                    <IoIosArrowBack />
                </div>
                <div className={`w-${numImages == 1 ? "1/6" : (numImages == 2 ? "2/5" : "1/4")}`}>
                    <Image
                        key={currentIndex}
                        src={`/${src}/${currentIndex}.JPG`}
                        height={IMG_HEIGHT}
                        width={IMG_WIDTH}
                        alt=""
                        placeholder={PLACEHOLDER_URL}
                    />
                </div>
                <div className={numImages == 1 ? "hidden" : `w-${numImages == 1 ? "full" : (numImages == 2 ? "2/5" : "1/4")}`}>
                    <Image
                        key={currentIndex + 1}
                        src={currentIndex + 1 > length ? TRANSPARENT_URL : `/${src}/${currentIndex + 1}.JPG`}
                        height={currentIndex + 1 > length ? 1 : IMG_HEIGHT}
                        width={currentIndex + 1 > length ? 1 : IMG_WIDTH}
                        alt=""
                        placeholder={currentIndex + 1 > length ? TRANSPARENT_URL : PLACEHOLDER_URL}
                    />
                </div>
                <div className={numImages == 3 ? "w-1/4" : "hidden"}>
                    <Image
                        key={currentIndex + 2}
                        src={currentIndex + 2 > length ? TRANSPARENT_URL : `/${src}/${currentIndex + 2}.JPG`}
                        height={currentIndex + 2 > length ? 1 : IMG_HEIGHT}
                        width={currentIndex + 2 > length ? 1 : IMG_WIDTH}
                        alt=""
                        placeholder={currentIndex + 1 > length ? TRANSPARENT_URL : PLACEHOLDER_URL}
                    />
                </div>
                <div
                    className="w-fit cursor-pointer self-center text-2xl lg:text-4xl"
                    onClick={() =>
                        setCurrentIndex(() =>
                            currentIndex + numImages > length
                                ? 1
                                : currentIndex + numImages
                        )
                    }
                >
                    <IoIosArrowForward />
                </div>
            </div>
        </>
    );
}
