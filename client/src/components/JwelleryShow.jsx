import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function JwelleryShow() {
    return (
        <>
            <div className="my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center justify-end">
                        <div className="flex flex-row my-10 max-w-72">
                            <div className="flex flex-col text-slate-500 text-end pr-2 text-md font-[montserrat]">
                                <div>NEW</div>
                                <div>ARRIVAL</div>
                                <div>SS 2024</div>
                            </div>
                            <div className="text-3xl font-[montserrat]">
                                Put a smile on Your Style
                            </div>
                        </div>
                        <div className="max-w-96">
                            <img src="./img/earrings.jpg" className="w-72" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <img src="./img/neaklaces.jpg" className="max-w-96" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <div className="max-w-96">
                            <img src="./img/New-Project-3-1.jpg" className="max-w-72" />
                        </div>
                        <div className="flex flex-col max-w-72 my-10">
                            <div className="text-slate-500">
                                Don’t forget to opt into Fashion2 News to have your offers and rewards delivered right to your inbox!
                            </div>
                            <div className="my-5">
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
                </div>
            </div>
        </>
    )
}
