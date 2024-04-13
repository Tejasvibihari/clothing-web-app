import { Link } from "react-router-dom";
// Props Validation 
import PropTypes from "prop-types";


export default function ProductCardM({ link, title, price, image }) {
    return (
        <>
            <div className="max-w-64">
                <div className="flex flex-col">
                    <div className="relative group">
                        <img src={image} className="" />
                        <div className="absolute inset-x-0 bottom-[0.5px] opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 bg-white transition-opacity duration-500">
                            <Link to={link}>
                                <button className="px-12 py-1 text-xl border-[1px] bg-[#ff6f61] text-white font-[montserrat] hover:text-[#ff6f61] hover:bg-transparent hover:border-[#ff6f61]">Go To Store</button>
                            </Link>
                        </div>
                    </div>
                    <div className="my-2">
                        <h6 className="font-[montserrat]">{title}</h6>
                    </div>
                    <div>
                        <h6 className="font-semibold font-[montserrat]">₹{price}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

ProductCardM.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
}