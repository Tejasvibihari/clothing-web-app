import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom"

export default function Showcase() {
    return (
        <>
            <div className='bg-[rgb(255,245,229)]'>
                <div className='relative'>
                    <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 hidden md:flex justify-center items-center z-10 font-[amsterdam] text-3xl'>Fashion Store</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto h-auto max-w-5xl gap-2">
                        <div className="row-span-2 relative group mt-4">
                            <img src="./img/h5-banner6.jpg" className="w-auto" />
                            <Link to="/cloth">
                                <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                                    <span className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] hover:font-bold'>Discover <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span>
                                </button>
                            </Link>
                        </div>
                        <div className='relative group md:mt-4'>
                            <img src="./img/blog_4-1024x700.jpg" className="h-full" />
                            <Link to="/cloth">
                                <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                                    <span className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] hover:font-bold'>Discover <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span>
                                </button>
                            </Link>
                        </div>
                        <div className="relative group">
                            <img src="./img/blog_8-768x525.jpg" className="w-fit h-full" />
                            <Link to="/jewellery">
                                <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                                    <span className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] hover:font-bold'>Discover <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
