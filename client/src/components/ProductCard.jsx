import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";

export default function ProductCard() {
    const [fav, setFav] = useState(false);

    function handleFav() {
        setFav(!fav)
    }
    return (
        <>
            <div className="max-w-64">
                <div className="flex flex-col">
                    <div className="relative group">
                        <img src="./img/cardm1.webp" className="" />
                        <div className={`absolute inset-0  flex justify-end group-hover:opacity-100  p-4 transition-opacity duration-500 ${fav ? "opacity-100" : "opacity-0"}`}>
                            <div>
                                <FavoriteBorderIcon sx={{ color: fav ? "#EB1100" : "black", '&:hover': { color: "#EB8273" } }} onClick={handleFav} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h6 className="font-[montserrat] text-sm text-[#ff6f61]">PRODUCT CATEGORY</h6>
                    </div>
                    <div className="my-2">
                        <h6 className="font-[montserrat] font-bold">The Super Puff - Hi Gloss</h6>
                    </div>
                    <div>
                        <h6 className="font-normal font-[montserrat]">$250</h6>
                    </div>
                </div >
            </div >
        </>
    )
}
