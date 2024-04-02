
import { Link } from 'react-router-dom';
export default function AboutSection() {
    return (
        <>
            <div>
                <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-10'>
                    <div className='p-5'>
                        <img src="./img/1-1.jpg" alt="about" className="w-full" />
                    </div>
                    <div>
                        <h1 className=" font-[montserrat] text-[#ff6f61]">
                            COMPANY HISTORY
                        </h1>
                        <h1 className="font-[italina] text-7xl my-5">
                            About Bihari
                        </h1>
                        <div className='mt-10'>
                            <div className='font-[montserrat] my-4'>
                                Mauris blandit aliquet elit eget tincidunt nibh pulvinar uisque velit nisi
                                pretium ut lacinia in elementum id enim velit nisi pretium elementum id enim.
                            </div>
                            <div className='text-gray-500 text-semibold font-[montserrat] my-4'>
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo
                                eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi,
                                pretium ut lacinia in, elementum id enim.
                            </div>
                            <div className='text-gray-500 text-semibold font-[montserrat] my-10'>
                                <Link to="/">
                                    <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                        Discover Now
                                        <span>
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
