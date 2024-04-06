import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signupStart, signupSuccess, signupError } from '../app/user/userSlice';
import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import { Collapse } from '@mui/material';


export default function SignUpForm() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    //For Username and Email 
    const [checkUserName, setCheckUserName] = useState('');
    const [checkEmail, setCheckEmail] = useState('');
    const [snackopen, setsnackOpen] = useState(false);
    //For Alert Dilogue Box
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertError, setAlertError] = useState(false);

    // Snack bar Handle Open And Close 
    const handleSnackClick = () => {
        setsnackOpen(true);
    };
    const handlesnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setsnackOpen(false);
        setCheckUserName(null);
        setCheckEmail(null);
    };

    //Handling And Sending Form data to backend
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            dispatch(signupStart())
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get("email");
            const password = formData.get("password");
            const username = formData.get("username");
            const userData = await axios.post('/api/user/signup', {
                name,
                email,
                password,
                username
            })
            dispatch(signupSuccess(userData.data.message))
            setAlertSuccess(true);
        } catch (error) {
            console.log(error)
            dispatch(signupError());
            setAlertError(true);
        }
    }

    //Checking The username and email 
    async function handleBlurUserName(event) {
        const username = event.target.value;
        try {
            const checkUserName = await axios.post('/api/user/checkusername', { username })
            setCheckUserName(checkUserName.data.message);
            handleSnackClick()

        } catch (error) {
            console.log(error)
        }
    }
    async function handleBlurEmail(event) {
        const email = event.target.value;
        try {
            const checkUserName = await axios.post('/api/user/checkemail', { email })
            setCheckEmail(checkUserName.data.message);
            handleSnackClick()

        } catch (error) {
            console.log(error)
        }
    }

    //For Closing Alert Dilogue Box 
    useEffect(() => {
        if (alertSuccess || alertError) {
            const timer = setTimeout(() => {
                setAlertSuccess(false);
                setAlertError(false);
            }, 2000); // 5000 milliseconds = 5 seconds

            return () => {
                clearTimeout(timer);
            };
        }
    }, [alertSuccess, alertError]);

    //Snackbar
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handlesnackClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <Snackbar
                open={snackopen}
                autoHideDuration={3000}
                onClose={handlesnackClose}
                message={checkUserName || checkEmail ? checkUserName || checkEmail : null}
                action={action}
                TransitionComponent={Slide}
            />
            <div className='max-w-lg'>
                <div className='fixed bottom-4 left-4'>
                    {alertSuccess && <Alert severity="success">User Registered Successfully</Alert>}
                    {alertError && <Alert severity="error">User Registration Failed</Alert>}
                </div>
            </div >
            <div className='max-w-lg mx-auto mt-20 p-4'>

                <div className='text-3xl font-[montserrat] my-10'>
                    Register
                </div>
                <form onSubmit={handleSubmit}>
                    <label className='text-lg font-[montserrat]'>Name<span className="text-red-700">*</span></label>
                    <input type='text' name='name' placeholder='Name' className='w-full p-4 my-2 border border-gray-300 text-lg' required />
                    <label className='text-lg font-[montserrat]'>Username<span className="text-red-700">*</span></label>
                    <input type='text' name='username' onBlur={handleBlurUserName} placeholder='Username' className='w-full p-4 my-2 border border-gray-300 text-lg' />
                    <label className='text-lg font-[montserrat]'>Email<span className="text-red-700">*</span></label>
                    <input type='email' name='email' onBlur={handleBlurEmail} placeholder='Email' className='w-full p-4 my-2 border border-gray-300 text-lg' required />
                    <label className='text-lg font-[montserrat]'>Password<span className="text-red-700">*</span></label>
                    <input type='password' name='password' placeholder='Password' className='w-full p-4 my-2 border border-gray-300 text-lg' required />
                    <button className='bg-[#ff6f61] text-xl w-full mt-4 p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                        {user.loading ? 'Loading...' : 'Register'}
                        <span className='mx-1'><ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                        </span>
                    </button>
                </form>
            </div>
        </>
    )
}
