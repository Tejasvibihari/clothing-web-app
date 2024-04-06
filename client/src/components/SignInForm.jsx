import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SignInForm() {
    return (
        <>
            <div className='max-w-lg mx-auto mt-20 p-4'>
                <div className='text-3xl font-[montserrat] my-10'>
                    Login
                </div>
                <form>
                    <label className='text-lg font-[montserrat]'>Email<span className="text-red-700">*</span></label>
                    <input type='email' placeholder='Email' className='w-full p-4 my-2 border border-gray-300 text-lg' />
                    <label className='text-lg font-[montserrat]'>Password<span className="text-red-700">*</span></label>
                    <input type='password' placeholder='Password' className='w-full p-4 my-2 border border-gray-300 text-lg' />
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
