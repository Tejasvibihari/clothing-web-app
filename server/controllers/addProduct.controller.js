import Cloth from "../model/cloth.model.js";
import Jewellery from "../model/jewellery.model.js";


export const addCloth = async (req, res) => {
    const { productName, description } = req.body;
    const { category, price } = req.body;
    console.log(productName)
    console.log(description)
    console.log(category)
    console.log(price)

    const images = req.files.map(file => file.filename);
    console.log(images)
    try {
        const newCloth = new Cloth({
            productName,
            description,
            category,
            price,
            images
        });
        await newCloth.save();
        res.status(201).json({ newCloth, message: "Cloth data added successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addJewellery = async (req, res) => {
    const { productName, description, category, price } = req.body;
    const images = req.files.map(file => file.filename);
    try {
        const newJewellery = new Jewellery({
            productName,
            description,
            category,
            price,
            images
        });
        await newJewellery.save();
        res.status(201).json({ newJewellery, message: "Jewellery data added successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}