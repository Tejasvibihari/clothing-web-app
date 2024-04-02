
export default function MissionVision() {
    return (
        <>
            <div className="my-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center justify-end">
                        <div className="flex flex-row my-10 w-96 items-center justify-center">
                            <div className="flex flex-col text-slate-500 items-end pr-2 text-md font-[montserrat]" >
                                <div>OUR MISSION</div>
                                <div className="text-right">PERFECT BEAUTTY</div>
                            </div>
                            <div className="text-3xl font-[montserrat] flex flex-col max-w-60">
                                Your Style is Our Inspiration
                            </div>
                        </div>
                        <div className="max-w-md my-5 text-gray-500">
                            Need a little newness in your life? We’ve got you covered.
                            Bringing you the latest drop of more killer clothes, versatile
                            accessories, stand-out footwear, and much, much more. Update
                            those lifesaving essentials or bag a knock-out, night-out number.
                        </div>
                        <div className="max-w-md">
                            <img src="./img/01.jpg" className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center col-span-2 relative">
                        <div className="">
                            <img src="./img/About_4.jpg" className="" />
                            <div className="font-[amsterdam] text-5xl absolute inset-0 flex justify-end items-center">
                                Our Story
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
