import { Link } from "react-router-dom"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
export default function AddProductButton({ btnLink, btnText, imgSrc, title, description }) {
    return (
        <>
            <div className='flex'>
                <div className='relative'>
                    <img src={imgSrc} className='max-w-96' />
                    <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50'>
                        <h1 className='text-2xl font-bold text-white'>{title}</h1>
                        <p className='text-gray-300'>
                            {description}
                        </p>
                        <Link to={btnLink}>
                            <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                {btnText}
                                <span><ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
