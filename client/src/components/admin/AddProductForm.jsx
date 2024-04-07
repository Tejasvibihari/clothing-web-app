import { useEffect, useState } from 'react'
import AddProductCard from './AddProductCard';

export default function AddProductForm() {
    const [type, setType] = useState('cloths');
    const [name, setName] = useState("Product Name");
    const [description, setDescription] = useState("Description");
    const [price, setPrice] = useState("000");
    const [category, setCategory] = useState("Category");
    const [image, setImage] = useState(['./img/p1.jpg', './img/p2.jpg', './img/p3.jpg', './img/p4.jpg']);

    //Category Array
    const clothCategory = ['Jeans', 'Top', 'Dress', 'Party Wear', 'Unergarments'];
    const jewelleryCategory = ['Earning', 'Ring', 'Necklace', 'Bracelet'];
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const productname = formData.get('productname');
            const price = formData.get('price');
            const description = formData.get('description');
            const category = formData.get('category');

        } catch (error) {
            console.log(error)
        }
    }

    const handleFormChange = (event) => {
        if (event.target.name === 'productname') {
            setName(event.target.value);
        } else if (event.target.name === 'price') {
            setPrice(event.target.value);
        } else if (event.target.name === 'description') {
            setDescription(event.target.value);
        } else if (event.target.name === 'category') {
            setCategory(event.target.value);
        } else if (event.target.name === 'image') {
            const files = event.target.files;
            const selectedFileArray = [];
            for (let i = 0; i < files.length; i++) {
                selectedFileArray.push(URL.createObjectURL(files[i]));
            }
            setImage([...image, ...selectedFileArray]);
        }
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    useEffect(() => {
        // Your code here will run whenever `type` changes
        console.log(`Type changed to: ${type}`);
    }, [type]);
    return (
        <>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='max-w-lg mx-auto mt-20 p-4'>
                        <div className='text-3xl font-[montserrat] my-10'>
                            Register
                        </div>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <label className='text-lg font-[montserrat]'>Product Name<span className="text-red-700">*</span></label>
                            <input type='text' name='productname' onChange={handleFormChange} placeholder='Product Name' className='w-full p-4 my-2 border border-gray-300 text-lg' required />
                            <label className='text-lg font-[montserrat]'>Price<span className="text-red-700">*</span></label>
                            <input type='text' name='price' onChange={handleFormChange} placeholder='Price' className='w-full p-4 my-2 border border-gray-300 text-lg' />
                            <label className='text-lg font-[montserrat]'>Description<span className="text-red-700">*</span></label>
                            <textarea type='text' name='description' onChange={handleFormChange} placeholder='Description' className='w-full p-4 my-2 border border-gray-300 text-lg' required />
                            <label className='text-lg font-[montserrat]'>Category<span className="text-red-700">*</span></label>
                            <select name="type" onChange={handleTypeChange} className='w-full p-4 my-2 border border-gray-300 text-lg' required>
                                <option value="cloths">Cloths</option>
                                <option value="jewellery">Jewellery</option>
                            </select>
                            <label className='text-lg font-[montserrat]'>Category<span className="text-red-700">*</span></label>
                            <select name="category" onChange={handleFormChange} className='w-full p-4 my-2 border border-gray-300 text-lg' required>
                                {type == "cloths" ? clothCategory.map((category, i) => (<option key={i} value={category}>{category}</option>)) : null}
                                {type == "jewellery" ? jewelleryCategory.map((category, i) => (<option key={i} value={category}>{category}</option>)) : null}
                            </select>
                            <label className='text-lg font-[montserrat]'>Image<span className="text-red-700">*</span></label>
                            <input type='file' multiple name='image' onChange={handleFormChange} className='w-full p-4 my-2 border border-gray-300 text-lg' required />
                            <button className='bg-[#ff6f61] text-xl w-full mt-4 p-3 text-white hover:text-[#ff6f61] hover:bg-transparent border-[1px] border-[#ff6f61]'>
                                {/* {user.loading ? 'Loading...' : 'Register'} */}
                                Add Product
                                <span className='mx-1'>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="my-auto px-4">
                    <AddProductCard
                        productName={name}
                        description={description}
                        category={category}
                        price={price}
                        image1={image[0]}
                        image2={image[1]}
                        image3={image[2]}
                        image4={image[3]}
                    />
                </div>
            </div>
        </>
    )
}
