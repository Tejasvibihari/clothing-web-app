
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function ProductCategory() {
    return (
        <>
            <div className="my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-5">
                    <div className="relative h-[690px] overflow-hidden">
                        <img src="./img/h5-banner2.jpg" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="font-[montserrat] text-lg text-white">WHAT NEXT</div>
                            <div className="font-[montserrat] text-5xl my-4 text-white font-semibold max-w-64 leading-snug text-center">Dress That Impress</div>
                            <div className="my-4">
                                <Link to="/cloth">
                                    <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                        Discover Now
                                        <span>
                                            <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[690px] overflow-hidden">
                        <img src="./img/rings-2-1 (1).jpg" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="font-[montserrat] text-lg text-white">
                                WHAT NEXT
                            </div>
                            <div className="font-[montserrat] text-5xl my-4 text-white font-semibold max-w-96 leading-snug text-center">
                                Jewelry That Defines You
                            </div>
                            <div className="my-4">
                                <Link to="/jewellery">
                                    <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                        Discover Now
                                        <span><ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
