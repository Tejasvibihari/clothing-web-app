import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PropTypes from 'prop-types';

export default function ProfileCard({ name, role, img, instLink, fbLink, pinLink, xLink }) {
    return (
        <>
            <div>
                <div className='flex flex-col justify-center items-start'>
                    <div className="relative group max-w-sm">
                        <img src={img} alt='profile' className='' />
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity ease-in delay-100">
                            <div className="flex gap-5">
                                <div>
                                    <Link to={instLink}>
                                        <div className="p-2 border-[1px] bg-[#ff6f61] bg-opacity-25 hover:bg-black hover:bg-opacity-25 hover:text-white">
                                            <InstagramIcon />
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={xLink}>
                                        <div className="p-2 border-[1px] bg-[#ff6f61] bg-opacity-25 hover:bg-black hover:bg-opacity-25 hover:text-white">
                                            <XIcon />
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={fbLink}>
                                        <div className="p-2 border-[1px] bg-[#ff6f61] bg-opacity-25 hover:bg-black hover:bg-opacity-25 hover:text-white">
                                            <FacebookIcon />
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={pinLink}>
                                        <div className="p-2 border-[1px] bg-[#ff6f61] bg-opacity-25 hover:bg-black hover:bg-opacity-25 hover:text-white">
                                            <PinterestIcon />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-2xl font-bold'>
                            {name}
                        </div>
                        <div className='text-gray-500'>
                            {role}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Props Validation
ProfileCard.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    img: PropTypes.string,
    instLink: PropTypes.string,
    fbLink: PropTypes.string,
    pinLink: PropTypes.string,
    xLink: PropTypes.string
}
