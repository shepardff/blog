import {Splide, SplideSlide} from "@splidejs/react-splide";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.jpg";
import React from "react";

const Slide = () => {
    return (
        <div className="mt-5">
            <Splide
                options={ {
                    type: 'loop',
                    autoplay: true,
                    height: '12rem',
                    perPage: 8,
                    cover: true,
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    breakpoints: {
                        1400: {
                            perPage: 7,
                            height: '10rem',
                        },
                        1000: {
                            perPage: 6,
                            height: '10rem',
                        },
                        800: {
                            perPage: 4,
                            height: '9rem',
                        },
                        540: {
                            perPage: 3,
                            height: '9rem',
                        }
                    }
                } }
            >
                <SplideSlide>
                    <img src={slide1} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide2} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide3} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide4} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide5} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide6} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide7} alt=""/>
                </SplideSlide>
                <SplideSlide>
                    <img src={slide8} alt=""/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Slide;