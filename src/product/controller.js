import { Router } from "express";
import { createNewProduct, allProducts, productById ,deleteProduct, updateProduct } from './service.js'
const router = Router();

// router.get("/", (req, res) => {
//     res.send("lista de productos");
// })

// //params
// router.post('/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`create product with id: ${id}`);
// })

// //query
// router.get('/estado', (req, res) => {
//     const { estado } = req.query;
//     res.send(`list products with status: ${estado}`);
// })

// //body
// router.post('/new', (req, res) => {
//     const {nombre, precio} = req.body
//     res.json({
//         message: 'crear producto',
//         nombre,
//         precio
//     })
// })


//create product
router.post('/', (req, res) => {
    const data = req.body;
    createNewProduct(data, res);
});

//all products
router.get('/', (req, res) => {
    allProducts(res);
});

// one product
router.get('/:id', (req, res) => {
   const id = req.params.id;
    productById(id, res);
});

// update product
router.put('/:id', (req, res) => {
    let id = +req.params.id;
    const data = req.body;
    updateProduct(id, data, res);
});

// // update product by id
// router.patch('/:id', (req, res) => {

// });

// delete product
router.delete('/:id', (req, res) => {
    let id = +req.params.id;
    deleteProduct(id, res);
});


export default router;