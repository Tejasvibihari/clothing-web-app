import { useState, useEffect } from "react";
import BasicBreadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { setCloth } from "../app/product/productSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Cloth() {
    const dispatch = useDispatch();
    const cloths = useSelector((state) => state.product.cloths);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        async function fetchCloth() {
            const response = await axios.get("/api/product/getcloth");
            dispatch(setCloth(response.data));
        }
        fetchCloth();
    }, []);

    // Filtering function
    const filterCloths = (cloth) => {
        const priceInRange = cloth.price >= priceRange[0] && cloth.price <= priceRange[1];
        const categoryMatched = selectedCategories.length === 0 || selectedCategories.includes(cloth.category);
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
    const filteredCloths = cloths.filter(filterCloths);

    return (
        <>
            <div>
                <BasicBreadcrumbs
                    first="Home"
                    second="Products"
                    secondL="/product"
                    last="Cloth"
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
                                {["All", "Jeans", "Top", "Party Wear", "Undergarments"].map((category) => (
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
                            {filteredCloths.map((cloth) => (
                                <ProductCard
                                    key={cloth._id}
                                    productName={cloth.productName}
                                    category={cloth.category}
                                    price={cloth.price}
                                    link={`/product/cloth/${cloth._id}`}
                                    images={`http://localhost:3000/uploads/${cloth.images[0]}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
