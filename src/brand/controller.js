import { Router } from "express";
import { createNewBrand, allBrands, brandById ,deleteBrand } from './service.js'
const router = Router();

//create brand
router.post('/', (req, res) => {
    const data = req.body;
    createNewBrand(data, res);
});

// all brands
router.get('/', (req, res) => {
    allBrands(res);
});

// one brand
router.get('/:id', (req, res) => {
    const id = req.params.id;
    brandById(id, res);
});

// delete brand
router.delete('/:id', (req, res) => {
    let id = +req.params.id;
    deleteBrand(id, res);
});


export default router;