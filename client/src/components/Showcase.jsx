import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Showcase() {
    return (
        <>
            <div className='bg-[#fff5e5]'>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto h-auto max-w-5xl gap-2">
                    <div className="row-span-2 relative group mt-4">
                        <img src="./img/h5-banner6.jpg" className="w-auto" />
                        <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                            <span className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] hover:font-bold'>Discover <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span>
                        </button>
                    </div>
                    <div className="relative group md:mt-4">
                        <img src="./img/blog_8-768x525.jpg" className="w-fit h-full" />
                        <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                            <span className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] hover:font-bold'>Discover <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span>
                        </button>
                    </div>
                    <div className='relative group'>
                        <img src="./img/blog_4-1024x700.jpg" className="h-full" />
                        <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                            <span className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] hover:font-bold'>Discover <ArrowForwardIosIcon sx={{ fontSize: 15 }} /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
