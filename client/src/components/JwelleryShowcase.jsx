
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function JwelleryShocase() {
    return (
        <>
            <div className='jewllery mb-4'>
                <div className="flex flex-col max-w-xl py-16 md:ml-36 ml-6">
                    <div className='text-5xl font-[italina] font-thin'>
                        The perfect jewelry for you
                    </div>
                    <div className='text-semibold text-slate-600 my-4'>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                        Donec sollicitudin molestie malesuada.
                    </div>
                    <div className='my-2'>
                        <Link to="#">
                            <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                Discover Now
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
