
export default function Footer() {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 py-20">
                    <div className="flex justify-center items-center">
                        <img src="./img/BihariLogo.png" alt="Bihari Logo" className="w-40" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-[montserrat] font-semibold my-4">USEFUL LINKS</h1>
                        <ul className="text-gray-500">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-[montserrat] font-semibold my-4">MY ACCOUNT</h1>
                        <ul className="text-gray-500 flex flex-col">
                            <li>My Profile</li>
                            <li>My Order History</li>
                            <li>My Whish List</li>
                            <li>Shopping Cart</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-[montserrat] font-semibold my-4">SUBSCRIBE</h1>
                        <div className="text-gray-500 flex flex-col">
                            Hey Babe, sign up and receive a 10% discount on your order. Be the first to hear about our new collection, discounts and more!
                        </div>
                        <div className="flex mt-4">
                            <input type="text" placeholder="Enter your email address" className="border border-[#666] px-2 py-1" />
                            <button className='bg-[#ff6f61] p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61] font-[montserrat]'>
                                Subscribe
                                <span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-300 text-white py-4 text-center">
                        <div className="flex flex-row justify-between mx-auto max-w-7xl">
                            <p className="">&copy; 2021 Bihari. All Rights Reserved.</p>
                            <div><img src="./img/cards-300x31.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
