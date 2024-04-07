import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuccess, signinFailure } from '../app/user/userSlice';
import Alert from '@mui/material/Alert';

export default function SignInForm() {
    const error = useSelector((state) => state.user.error);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Form Handling
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(signinStart())
            const formData = new FormData(event.target);
            const email = formData.get('email');
            const password = formData.get('password');
            const userData = await axios.post('/api/user/signin', {
                email, password
            });
            dispatch(signinSuccess(userData.data))
            navigate("/")
        } catch (error) {
            dispatch(signinFailure(error.response.data.message));
        }
    }
    // Alert Handling
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                dispatch(signinFailure(null))
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [error]);
    return (
        <><div className='max-w-lg'>
            <div className='fixed bottom-4 left-4'>
                {error && <Alert severity="warning">{error}</Alert>}
            </div>
        </div >
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
