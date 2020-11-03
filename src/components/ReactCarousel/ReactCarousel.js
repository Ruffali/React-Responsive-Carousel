import React from "react";
import classes from './ReactCarousel.module.scss';
import "./ReactCarousel.css";
import { Carousel } from "react-responsive-carousel";

import img01 from './img/img01.jpg';
import img02 from './img/img02.jpg';
import img03 from './img/img03.jpg';
import img04 from './img/img04.jpg';
import img05 from './img/img05.jpg';
import img06 from './img/img02.jpg';

import Size from "../Size/Size";

const ReactCarousel = () => {
    let breakPoinNumber = [];

    const size = Size();

    let imagesContent = [
        {
            id: 1,
            img: img01,
            content: 'Sample Carousel 1'
        },
        {
            id: 2,
            img: img02,
            content: 'Sample Carousel 2'
        },
        {
            id: 3,
            img: img03,
            content: 'Sample Carousel 3'
        },
        {
            id: 4,
            img: img04,
            content: 'Sample Carousel 4'
        },
        {
            id: 5,
            img: img05,
            content: 'Sample Carousel 5'
        },
        {
            id: 6,
            img: img06,
            content: 'Sample Carousel 6'
        },
    ]

    const breakPoints = (width) => {
        if (width < 500) {
            breakPoinNumber.push(1);
        } else if (width >= 500 && width < 768) {
            breakPoinNumber.push(2);
        } else if (width >= 768 && width < 1200) {
            breakPoinNumber.push(3);
        } else if (width >= 1200) {
            breakPoinNumber.push(4);
        }
    };

    breakPoints(size.width);
    let numOfDiv = 100 / breakPoinNumber;

    return (
        <div className={`${classes.reactCarousel} ${"rct"}`}>
            <Carousel
                showArrows
                autoPlay={false}
                infiniteLoop
                showStatus
                showIndicators
                showThumbs
                useKeyboardArrows
                stopOnHover
                swipeable
                dynamicHeight
                emulateTouch
                centerSlidePercentage={numOfDiv}
                centerMode={true}
                emulateTouch={false}
                swipeScrollTolerance={2}
                transitionTime={350}
                interval={3000}
                width={"500"}
                verticalSwipe={"standart"}
                axis={"horizontal"}>
                {imagesContent.map((item) => {
                    return (
                        <div className={"inside"} key={item.id}>
                            <img src={item.img} />
                            <p className={"legend"} >{item.content}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default ReactCarousel;
