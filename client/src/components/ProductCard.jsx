import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import PropTypes from 'prop-types';



export default function ProductCard({ link, images, productName, category, price }) {
    const [fav, setFav] = useState(false);

    function handleFav() {
        setFav(!fav)
    }
    return (
        <>
            <div className="max-w-64">
                <Link to={link}>
                    <div className="flex flex-col">
                        <div className="relative group">
                            <img src={images} className="" />
                            <div className={`absolute inset-0  flex justify-end group-hover:opacity-100  p-4 transition-opacity duration-500 ${fav ? "opacity-100" : "opacity-0"}`}>
                                <div>
                                    <FavoriteBorderIcon sx={{ color: fav ? "#EB1100" : "black", '&:hover': { color: "#EB8273" } }} onClick={handleFav} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <h6 className="font-[montserrat] text-sm text-[#ff6f61]">{category}</h6>
                        </div>
                        <div className="my-2">
                            <h6 className="font-[montserrat] font-bold">{productName}</h6>
                        </div>
                        <div>
                            <h6 className="font-normal font-[montserrat]">₹ {price}</h6>
                        </div>
                    </div >
                </Link>
            </div >
        </>
    )
}


ProductCard.propTypes = {
    link: PropTypes.string,
    images: PropTypes.string,
    productName: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
};