"use client"
// import slider1 from '../../public/slideshow-img.jpg'
import slider2 from '../../public/main-slider2.png'
import slider3 from '../../public/main-slider3.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const images = [slider2, slider3, slider2];

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        speed: 100,
        autoplayspeed: 100,
        cssEase: "linear",
        appendDots: dots => (
            <div
                style={{
                    width: "150px",
                    borderRadius: "10px",
                    padding: "10px",
                    right: "10px",
                    bottom: "10px",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        // customPaging: i => (
        //     <div
        //         style={{
                    // width: "10px",
                    // height: "10px",
                    // borderRadius: "100px",
                    // color: "blue",
                    // background: "gray",
                    // border: "1px gray solid"
        //         }}
        //     >
        //     </div>
        // )
    };
    return (
        <div className="slider-container relative w-full ">
            <Slider {...settings} className='relative w-full overflow-x-hidden '>
                    <div>
                        <Image src={slider2} alt='Slider 1' className='object-cover'></Image>
                    </div>
                    <div>
                        <Image src={slider3} alt='Slider 2 '></Image>
                    </div>
                    <div>
                        <Image src={slider2} alt='Slider 1 '></Image>
                    </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;



