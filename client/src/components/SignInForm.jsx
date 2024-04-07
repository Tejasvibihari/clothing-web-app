import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useState from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignInForm() {
    const navigate = useNavigate();

    // Form Handling
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const email = formData.get('email');
            const password = formData.get('password');

            const userData = await axios.post('/api/user/signin', {
                email, password
            });
            console.log(userData.data.message);
            navigate("/")


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='max-w-lg mx-auto mt-20 p-4'>
                <div className='text-3xl font-[montserrat] my-10'>
                    Login
                </div>
                <form onSubmit={handleSubmit}>
                    <label className='text-lg font-[montserrat]'>Email<span className="text-red-700">*</span></label>
                    <input type='email' name='email' placeholder='Email' className='w-full p-4 my-2 border border-gray-300 text-lg' />
                    <label className='text-lg font-[montserrat]'>Password<span className="text-red-700">*</span></label>
                    <input type='password' name='password' placeholder='Password' className='w-full p-4 my-2 border border-gray-300 text-lg' />
                    <button className='bg-[#ff6f61] text-xl w-full mt-4 p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                        Login
                        <span className='mx-1'><ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                        </span>
                    </button>
                </form>
            </div>
        </>
    )
}
