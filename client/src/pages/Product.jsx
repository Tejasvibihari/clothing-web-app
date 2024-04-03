import Breadcrumbs from "../components/Breadcrumbs";
import EmailSignUp from "../components/EmailSignUp";
import Features from "../components/Features";
import ProductCard from "../components/ProductCard";
import ProductCategory from "../components/ProductCategory";


export default function Product() {
    return (
        <>

            <Breadcrumbs
                first="Home"
                last="Products" />
            <ProductCategory />
            <Features />
            <EmailSignUp />
            <ProductCard />
        </>
    )
}
