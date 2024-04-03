import Slider from "react-slick";
import ProductCard from "./ProductCardM";
import propTypes from "prop-types";

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
export default function ProductSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 500,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const whatsNew = "WHAT'S NEW"
    return (
        <div className="slider-container">
            <div className="max-w-7xl mx-auto text-xl font-[montserrat] my-4">
                {whatsNew}
            </div>
            <Slider {...settings}>
                <div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div><div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div>
                <div>
                    <ProductCard />
                </div>
            </Slider>
        </div>
    );
}

SamplePrevArrow.propTypes = {
    className: propTypes.string,
    style: propTypes.object,
    onClick: propTypes.func
};
SampleNextArrow.propTypes = {
    className: propTypes.string,
    style: propTypes.object,
    onClick: propTypes.func
};