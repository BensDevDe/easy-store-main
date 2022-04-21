import Product from "../models/productModel.js";

//  @desc Fetch all products
//  @route GET /api/products
//  @access Public


const findProductsController = async (req,res) => {
  
    try{
        console.log("i entered!")
        const allProducts = await Product.find();
        if (!allProducts) return res.status(404).send('products were not found')
        return res.status(200).send(allProducts);
    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}

export default findProductsController;