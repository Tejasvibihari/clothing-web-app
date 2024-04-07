import propTypes from "prop-types";
export default function AddProductCard({ productName, description, category, price, image1, image2, image3 }) {
    return (
        <>
            <div className=''>
                <div className='flex flex-row p-4'>
                    <div className='flex flex-row'>
                        <div className=''>
                            <img src={image1} className='max-h-96' />
                        </div>
                        <div className='flex flex-col max-h-96 max-w-32 overflow-hidden'>
                            <img src={image2} className='max-h-32 max-w-32' />
                            <img src={image3} className='max-h-32 max-w-32' />
                            <img src={image3} className='max-h-32 max-w-32' />
                        </div>
                    </div>
                    <div className='w-full p-4'>
                        <div className='flex flex-col'>
                            <div className='text-2xl font-[montserrat]'>{productName}</div>
                            <div className='my-3 text-lg font-[montserrat] whitespace-normal'>{description.length > 250 ? description.substring(0, 250) + "......" : description}</div>
                            <div className='flex  justify-between'>
                                <div className='text-lg font-[montserrat]'>{category}</div>
                                <div className='text-lg font-[montserrat]'>{price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

AddProductCard.propTypes = {
    productName: propTypes.string,
    description: propTypes.string,
    category: propTypes.string,
    price: propTypes.string,
    image1: propTypes.string,
    image2: propTypes.string,
    image3: propTypes.string
}