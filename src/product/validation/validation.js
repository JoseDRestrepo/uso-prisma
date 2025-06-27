const validateId = (int, res) => {
    if (isNaN(int)) {
        res.json({
            message: 'id must be a number',
            status: 400
        });
    } 
}

const  foundId = (id, res) => {
    if (id === -1) {
        res.json({
            message: 'id not found',
            status: 404
        });
    }
}

const  foundProduct = (product, res) => {
    if (!product) {
        res.json({
            message: 'product not found',
            status: 404
        });
    }
}

export {validateId, foundId, foundProduct};