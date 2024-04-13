
import Slider from "react-slick";
import Hero from "./Hero";
import PropTypes from "prop-types";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

export default function HeroSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Hero
                        heroText="This Week Make Yourself"
                        btnLink="/product"
                        mainImgSrc="./img/h2-slider01.jpg"
                        sideImgSrc="./img/h2-slider02.jpg"
                        bgColor="bg-[#E8D8C5]"
                    />
                </div>
                <div>
                    <Hero
                        heroText="60% off Accessories For Women"
                        btnLink="#"
                        mainImgSrc="./img/h2-slider5.jpg"
                        sideImgSrc="./img/h2-slider6.jpg"
                        bgColor="bg-[#E8E6E8]"
                    />
                </div>
            </Slider>
        </div>
    );
}


SampleNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};