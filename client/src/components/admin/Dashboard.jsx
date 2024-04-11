import AddProductButton from "./AddProductButton";

export default function Dashboard() {
    return (
        <>
            <div className="mx-10">
                <div className="text-2xl font-[montserrat] text-gray-700 my-4">
                    Manage Product
                </div>
                <div className="flex gap-10">
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="Add Product"
                        description="Add Product Here"
                        btnLink="/addproduct"
                        btnText="Add Product"
                    />
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="View Cloth"
                        description="View Cloth Here"
                        btnLink="/addproduct"
                        btnText="View Cloth"
                    />
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="View Jewellery"
                        description="View Cloth Here"
                        btnLink="/addproduct"
                        btnText="View Jewellery"
                    />
                </div>
            </div>
            <div className="mx-10">
                <div className="text-2xl font-[montserrat] text-gray-700 my-4">
                    Manage Order
                </div>
                <div className="flex gap-10">
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="Add Product"
                        description="Add Product Here"
                        btnLink="/addproduct"
                        btnText="Add Product"
                    />
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="View Cloth"
                        description="View Cloth Here"
                        btnLink="/addproduct"
                        btnText="View Cloth"
                    />
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="View Jewellery"
                        description="View Cloth Here"
                        btnLink="/addproduct"
                        btnText="View Jewellery"
                    />
                </div>
            </div>
            <div className="mx-10">
                <div className="text-2xl font-[montserrat] text-gray-700 my-4">
                    Manage Product
                </div>
                <div className="flex gap-10">
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="Add Product"
                        description="Add Product Here"
                        btnLink="/addproduct"
                        btnText="Add Product"
                    />
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="View Cloth"
                        description="View Cloth Here"
                        btnLink="/addproduct"
                        btnText="View Cloth"
                    />
                    <AddProductButton
                        imgSrc="./img/blog_1.jpg"
                        title="View Jewellery"
                        description="View Cloth Here"
                        btnLink="/addproduct"
                        btnText="View Jewellery"
                    />
                </div>
            </div>
        </>
    )
}
