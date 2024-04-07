import AddProductForm from "../components/admin/AddProductForm";
import BasicBreadcrumbs from "../components/Breadcrumbs";


export default function AddProduct() {
    return (
        <>
            <BasicBreadcrumbs
                first="Home"
                last="Add Product" />
            <AddProductForm />
        </>
    )
}
