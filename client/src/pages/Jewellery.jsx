import { useState, useEffect } from "react";
import BasicBreadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { setJewellery } from "../app/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cloth() {
    const dispatch = useDispatch();
    const jewelleries = useSelector((state) => state.product.jewelleries);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        async function fetchJewellery() {
            const response = await axios.get("/api/product/getjewellery");
            dispatch(setJewellery(response.data))
        }
        fetchJewellery();
    }, []);

    // Filtering function
    const filterJewelleries = (jewellery) => {
        const priceInRange = jewellery.price >= priceRange[0] && jewellery.price <= priceRange[1];
        const categoryMatched = selectedCategories.length === 0 || selectedCategories.includes(jewellery.category);
        return priceInRange && categoryMatched;
    };

    // Event handler for price range change
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    // Event handler for category selection change
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (event.target.checked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        }
    };

    // Filtered cloth products based on price and category
    const filteredJewelleries = jewelleries.filter(filterJewelleries);

    return (
        <>
            <div>
                <BasicBreadcrumbs
                    first="Home"
                    second="Products"
                    secondL="/product"
                    last="Jewellery"
                />
                <div className="grid grid-cols-6 max-w-7xl mx-auto mt-5">
                    <div className="col-span-2 p-4">
                        <div className="text-xl font-[montserrat]">
                            Filter
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[#121111 mt-4 mb-2 font-semibold">
                                Categories
                            </div>
                            <div className="inline-flex flex-col mx-5 text-gray-500">
                                {/* Checkbox for each category */}
                                {["All", "Ring", "Earring", "Necklace", "Bracelet"].map((category) => (
                                    <FormControlLabel
                                        key={category}
                                        control={<Checkbox />}
                                        label={category}
                                        value={category}
                                        checked={selectedCategories.includes(category) || (category === "All" && selectedCategories.length === 0)}
                                        onChange={handleCategoryChange}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="text-[#121111 mt-4 mb-2 font-semibold">
                            Price
                        </div>
                        <div className="flex-col mx-7 text-gray-500">
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0} // Set the minimum value
                                max={10000} // Set the maximum value
                            />
                        </div>
                        <div className="flex justify-between mx-5">
                            <div>{priceRange[0] < 1 ? "Min" : `₹ ${priceRange[0]}`}</div>
                            <div>{priceRange[1] >= 10000 ? "Max" : `₹ ${priceRange[1]}`}</div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="grid grid-cols-4 gap-7">
                            {/* Display filtered cloth products */}
                            {filteredJewelleries.map((jewellery) => (
                                <ProductCard
                                    key={jewellery._id}
                                    productName={jewellery.productName}
                                    category={jewellery.category}
                                    price={jewellery.price}
                                    link={`/product/jewellery/${jewellery._id}`}
                                    images={`http://localhost:3000/uploads/${jewellery.images[0]}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
