import { validateId, foundId, foundProduct } from "../product/validation/validation.js";
import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

async function createNewBrand(data, res) {
    const newBrand = await prisma.brand.create({ data: data });
    res.json({
        message: 'new brand created',
        status: 200,
        brand: newBrand
    });
}

async function allBrands(res) {
    const brands = await prisma.brand.findMany();
    res.json(brands);
}

async function brandById(id, res) {
    const isInt = +id;
    validateId(isInt, res);
    const brand = await prisma.brand.findUnique({ 
        where: { id: isInt } 
    });
    foundProduct(brand, res);
    res.json(brand);
}

async function updateBrand(id, body, res) {
    const isInt = +id;
    validateId(isInt, res);
    const brand = await prisma.brand.findUnique({ 
        where: { id: isInt } 
    });
    foundProduct(brand, res);
    const updatedBrand = await prisma.brand.update({
        where: { id: isInt },
        data: body
    });
    res.json({
        message: 'brand updated',
        status: 200,
        brand: updatedBrand
    });
}

async function deleteBrand(id, res) {
    const isInt = +id;
    validateId(isInt, res);
    const brand = await prisma.brand.findUnique({ 
        where: { id: isInt } 
    });
    foundId(brand, res);
    await prisma.brand.delete({ where: { id: isInt } });
    res.json({
        message: 'brand deleted successfully',
        status: 200
    });
}

export {
    createNewBrand,
    allBrands,
    brandById,
    updateBrand,
    deleteBrand
}