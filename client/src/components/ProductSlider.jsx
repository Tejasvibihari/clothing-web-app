import Slider from "react-slick";
import ProductCard from "./ProductCardM";
import propTypes from "prop-types";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCloth, setJewellery, setProductError } from "../app/product/productSlice";


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
    const dispatch = useDispatch();
    const cloths = useSelector((state) => state.product.cloths);
    const jewellries = useSelector((state) => state.product.jewelleries);
    useEffect(() => {
        async function getPoduct() {
            try {
                const cloths = await axios.get("/api/product/getcloth");
                const jewelleries = await axios.get("/api/product/getjewellery");
                dispatch(setCloth(cloths.data))
                dispatch(setJewellery(jewelleries.data))
            } catch (error) {
                console.log(error)
                setProductError("No Product To Show" + error)

            }
        }
        getPoduct();
    }, []);

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
                {cloths.map((cloth, i) => {
                    return (
                        <div key={i}>
                            <ProductCard
                                key={cloth._id}
                                title={cloth.productName}
                                price={cloth.price}
                                image={`http://localhost:3000/uploads/${cloth.images[0]}`}
                            />
                        </div>
                    )
                })}
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