const getAllProducts = (req , res) =>{
    res.send("All products");
}

const getAllProductsStactic = (req , res) =>{
    res.send("All products static");
}

module.exports = {
    getAllProducts,
    getAllProductsStactic,
};