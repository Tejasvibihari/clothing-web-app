import express from 'express';
import multer from 'multer';
import { addCloth, addJewellery, getCloth, getJewellery } from '../controllers/product.controller.js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDir = path.join(__dirname, '../uploads');

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
})

const upload = multer({ storage: storage })

const router = express.Router();
router.post('/addcloth', upload.array("images", 4), addCloth);
router.post('/addjewellery', upload.array("images", 4), addJewellery);
router.get('/getcloth', getCloth);
router.get('/getjewellery', getJewellery);

export default router;