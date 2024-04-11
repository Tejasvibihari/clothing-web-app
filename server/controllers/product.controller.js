import Cloth from "../model/cloth.model.js";
import Jewellery from "../model/jewellery.model.js";


export const addCloth = async (req, res) => {
    const { productName, description, subtitle } = req.body;
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
            subtitle,
            images
        });
        await newCloth.save();
        res.status(201).json({ newCloth, message: "Cloth data added successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addJewellery = async (req, res) => {
    const { productName, description, category, price, subtitle } = req.body;
    const images = req.files.map(file => file.filename);
    try {
        const newJewellery = new Jewellery({
            productName,
            description,
            category,
            price,
            subtitle,
            images
        });
        await newJewellery.save();
        res.status(201).json({ newJewellery, message: "Jewellery data added successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getCloth = async (req, res) => {
    try {
        const clothData = await Cloth.find();
        if (!clothData) return res.status(404).json({ message: "No data found" });
        res.status(200).json(clothData);
    } catch (error) {
        console.log(error)
    }
}
export const getJewellery = async (req, res) => {
    try {
        const jewelleryData = await Jewellery.find();
        if (!jewelleryData) return res.status(404).json({ message: "No data found" });
        res.status(200).json(jewelleryData);
    } catch (error) {
        console.log(error)
    }
}