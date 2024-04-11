import { useState, useEffect } from "react"
import BasicBreadcrumbs from "../components/Breadcrumbs"
import ClothProduct from "../components/ClothProduct"
import axios from "axios"
import ProductCard from "../components/ProductCard"


export default function Cloth() {
    const [cloths, setCloths] = useState([]);
    useEffect(() => {
        async function fetchCloth() {
            const response = await axios.get("/api/product/getcloth");
            setCloths(response.data)
        }

        fetchCloth();
    }, [])
    console.log(cloths)
    cloths.filter(cloth => cloth.category == "Jeans").map((cloth) => (
        console.log(cloth.images[0])
    )
    )
    return (
        <>
            <div>
                <BasicBreadcrumbs
                    first="Home"
                    second="Products"
                    secondL="/product"
                    last="Cloth" />
                <div className="grid grid-cols-6 max-w-7xl mx-auto">
                    <div className="col-span-2">

                    </div>
                    <div className="col-span-4 mt-5">
                        <div className="grid grid-cols-4 gap-4">
                            {cloths.filter(cloth => cloth.category == "Jeans").map((cloth) => (
                                <ProductCard
                                    key={cloth._id}
                                    productName={cloth.productName}
                                    category={cloth.category}
                                    price={cloth.price}
                                    images={`http://localhost:3000/uploads/${cloth.images[0]}`}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {cloths.filter(cloth => cloth.category == "Top").map((cloth) => (
                                <ProductCard
                                    key={cloth._id}
                                    productName={cloth.productName}
                                    category={cloth.category}
                                    price={cloth.price}
                                    images={`http://localhost:3000/uploads/${cloth.images[0]}`}
                                />
                            ))}
                        </div>
                        <div className="font-[montserrat] my-4 text-lg font-bold text-[#1a1a1a]" >
                            Party Wear
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {cloths.filter(cloth => cloth.category == "Party Wear").map((cloth) => (
                                <ProductCard
                                    key={cloth._id}
                                    productName={cloth.productName}
                                    category={cloth.category}
                                    price={cloth.price}
                                    images={`http://localhost:3000/uploads/${cloth.images[0]}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
