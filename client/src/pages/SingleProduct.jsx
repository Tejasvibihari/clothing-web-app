// ProductPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import BasicBreadcrumbs from '../components/Breadcrumbs';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/product/${productId}`);
                setProduct(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div className='font-bold text-9xl'>Loading...</div>;
    }

    return (
        <>
            <BasicBreadcrumbs
                first="Home"
                second="Products"
                secondL="/product"
                third={product.category}
                last={product.productName}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto my-12'>
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-col'>
                        <div>
                            <img src={`http://localhost:3000/uploads/${product.images[1]}`} className="w-32" />
                        </div>
                        <div>
                            <img src={`http://localhost:3000/uploads/${product.images[2]}`} className="w-32" />
                        </div>
                        <div>
                            <img src={`http://localhost:3000/uploads/${product.images[3]}`} className="w-32" />
                        </div>
                    </div>
                    <div>
                        <img src={`http://localhost:3000/uploads/${product.images[0]}`} className='max-w-96' />
                    </div>
                </div>
                <div className='p-4'>
                    <div className='flex flex-col'>
                        <div className='text-[#ff6f61] font-[montserrat]'>
                            {product.category}
                        </div>
                        <div className='my-4 font-semibold text-4xl font-[montserrat]'>
                            {product.productName}
                        </div>
                        <div className='my-7 font-semibold text-xl font-[montserrat]'>
                            ₹ {product.price}
                        </div>
                        <div className='my-4'>
                            {product.subtitle}
                        </div>
                        <div className='my-7'>
                            <div className='my-1'>
                                <span className='mx-2'>
                                    <MultipleStopIcon />
                                </span>
                                <span>Free Shipping</span>
                            </div>
                            <div className='my-1'>
                                <span className='mx-2'>
                                    <LocalShippingIcon />
                                </span>
                                <span>Ships within 24 hours</span>
                            </div>
                            <div className='my-1'>
                                <span className='mx-2'>
                                    <FileDownloadDoneIcon />
                                </span>
                                <span>Easy Returns</span>
                            </div>
                        </div>
                        <div>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
