import {validateId, foundId, foundProduct} from './validation/validation.js';
import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

// let id = 0;

async function createNewProduct(data, res) {
    const newProduct = await prisma.product.create({ data: data })
    res.json({
        message: 'new product created',
        status: 200,
        product: newProduct
    });
}

async function allProducts(res) {
    const products = await prisma.product.findMany();
    res.json(products);
}

async function productById(id, res) {
    const isInt = +id
    validateId(isInt, res);
    const product = await prisma.product.findUnique({ 
        where: { id: isInt }
    })
    foundProduct(product, res);
    res.json(product)
}

async function updateProduct(id, body, res) {
    const isInt = +id;
    validateId(isInt, res);
    const product = await prisma.product.findUnique({ 
        where: { id: isInt }
    });
    foundProduct(product, res);
    const updatedProduct = await prisma.product.update({
        where: { id: isInt },
        data: body
    });
    res.json({
        message: 'product updated',
        status: 200,
        product: updatedProduct
    })
}

async function deleteProduct(id, res) {
    const isInt = +id;
    validateId(isInt, res);
    const product = await prisma.product.findUnique({ 
        where: { id: isInt }
    });
    foundId(product, res);
    await prisma.product.delete({ 
        where: { id: isInt } 
    });
    res.json({
        message: 'product deleted successfully',
        status: 200
    });
}
 
export {
    createNewProduct,
    allProducts,
    productById,
    updateProduct,
    deleteProduct
}