

export default function EmailSignUp() {
    return (
        <>
            <div>
                <div className="bg-[rgb(255,245,229)]">
                    <div className="container mx-auto py-20">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl font-[montserrat] font-bold text-[#333]">Sign up for our newsletter</h1>
                            <p className="text-[#666] mt-2">Get the latest news and offers</p>
                            <div className="flex mt-4">
                                <input type="text" placeholder="Enter your email address" className="border border-[#666] px-2 py-1 w-96" />
                                <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] font-[montserrat]'>
                                    Get Notified
                                    <span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
