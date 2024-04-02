
export default function ContactForm() {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <div className='text-sm text-[#ff6f61] text-center my-10'>
                    CONTACT US
                </div>
                <div className='text-4xl text-gray-900 text-center font-[italina] mb-7'>
                    Keep In Touch with Us
                </div>
                <div className='max-w-2xl text-center mx-auto text-gray-500 mb-10'>
                    Our Customer Care team are available for support Monday - Friday
                    from 9am to 5pm GMT. Alternatively, look to our FAQs page for answers
                    to common queries.
                </div>
                <div className="bg-gray-100 max-w-7xl">
                    <div className='p-12'>
                        <form className='flex flex-col'>
                            <div className='flex flex-row gap-5'>
                                <input type='text' className='p-3 w-full' placeholder='Name' />
                                <input type='email' className='p-3 w-full' placeholder='Email' />
                            </div>
                            <div className='mt-7'>
                                <textarea className='w-full p-4' rows="15" placeholder='Type Message Here' />
                            </div>
                            <div className='mt-10'>
                                <button className='bg-[#ff6f61] p-3 text-white w-full hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                    Discover Now
                                    <span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
