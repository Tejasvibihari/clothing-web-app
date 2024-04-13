import Breadcrumbs from "../components/Breadcrumbs";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";


export default function Cart() {
    const wishlist = useSelector((state) => state.product.wishListProduct);
    const wishListProductError = useSelector((state) => state.product.wishListProductError);
    console.log(wishlist)
    return (
        <>
            <div>
                <Breadcrumbs
                    first="Home"
                    last="Cart" />
                <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4 mx-auto gap-4 my-10">
                    {wishListProductError ?
                        <div className="mx-auto max-w-7xl my-10 font-[montserrat] text-xl">No Product to Added Cart</div>
                        : wishlist && wishlist.map((wish) => (
                            <ProductCard
                                key={wish._id}
                                productName={wish.productName}
                                category={wish.category}
                                price={wish.price}
                                images={wish.images}
                            />
                        ))}
                </div>

            </div>
        </>
    )
}
