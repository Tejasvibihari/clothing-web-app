import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export default function Hero({ heroText, bgColor, btnLink, mainImgSrc, sideImgSrc }) {
    return (
        <>
            <div className={`h-screen ${bgColor}`}>
                <div className='absolute mt-96 ml-[930px] text-4xl font-amsterdam hidden md:flex'>
                    Fashion Store
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="">
                        <div className="flex flex-col justify-center items-start h-screen p-2">
                            <span className="text-bold">
                                ______ FIND INSPRATION
                            </span>
                            <div className='mt-4 text-6xl font-sans'>
                                {heroText}
                            </div>
                            <div className='mt-4 justify-center items center'>
                                <Link to={btnLink}>
                                    <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                        Discover Now
                                        <span><ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-screen flex'>
                        <img src={mainImgSrc} className='rounded w-screen' alt="" />
                    </div>
                    <div className="hidden md:flex justify-end items-center mr-4">
                        <img src={sideImgSrc} className="h-[400px]" alt="" />
                    </div>
                </div>
            </div >
        </>
    )
}

Hero.propTypes = {
    heroText: PropTypes.string,
    bgColor: PropTypes.string,
    btnLink: PropTypes.string,
    mainImgSrc: PropTypes.string,
    sideImgSrc: PropTypes.string
}