import { Link } from "react-router-dom";


export default function ProductCardM() {
    return (
        <>
            <div className="max-w-64">
                <div className="flex flex-col">
                    <div className="relative group">
                        <img src="./img/cardm1.webp" className="" />
                        <div className="absolute inset-x-0 bottom-[0.5px] opacity-0 group-hover:opacity-100 flex items-end justify-center p-4 bg-white transition-opacity duration-500">
                            <Link to="">
                                <button className="px-12 py-1 text-xl border-[1px] bg-[#ff6f61] text-white hover:text-[#ff6f61] hover:bg-transparent hover:border-[#ff6f61]">Go To Store</button>
                            </Link>
                        </div>
                    </div>
                    <div className="my-2">
                        <h6>The Super Puff - Hi Gloss</h6>
                    </div>
                    <div>
                        <h6 className="font-semibold">$250</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
