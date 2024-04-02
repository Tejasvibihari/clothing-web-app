

export default function Features() {
    return (
        <>
            <div className='bg-black'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center py-7 font-[montserrat]'>
                        <div className='flex flex-col text-center justify-center items-center'>
                            <div className='my-7'>
                                <img src="./img/shipping.svg" alt='feature1' className='' />
                            </div>
                            <div className=''>
                                <div className='text-white mb-5'>
                                    Super Easy Shipping
                                </div>
                                <div className='text-gray-500 mb-5'>
                                    Proin hac augue integer tempor porta fringilla sapien
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col text-center justify-center items-center'>
                            <div className='my-7'>
                                <img src="./img/warranty.svg" alt='feature1' className='' />
                            </div>
                            <div className=''>
                                <div className='text-white mb-5'>
                                    1 Years Warranty
                                </div>
                                <div className='text-gray-500 mb-5'>
                                    Proin hac augue integer tempor porta fringilla sapien
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col text-center justify-center items-center'>
                            <div className='my-7'>
                                <img src="./img/easy.svg" alt='feature1' className='' />
                            </div>
                            <div className=''>
                                <div className='text-white mb-5'>
                                    Easy Return Policy
                                </div>
                                <div className='text-gray-500 mb-5'>
                                    Proin hac augue integer tempor porta fringilla sapien
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col text-center justify-center items-center'>
                            <div className='my-7'>
                                <img src="./img/appointment.svg" alt='feature1' className='' />
                            </div>
                            <div className=''>
                                <div className='text-white mb-5'>
                                    Book an Appointment
                                </div>
                                <div className='text-gray-500 mb-5'>
                                    Proin hac augue integer tempor porta fringilla sapien
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
