import colors from 'colors';
import Product from '../models/productModel.js';


// @desc Fetch single product
// @route Get api/products/:id
// @access Public

const findProductController = async (req,res) => {
    const {id} = req.params;

    try{
        const product = await Product.findById(id);
        return res.status(200).send(product);
    }catch(error){
        res.status(404).send({msg: `There was an error: ${error}`})
    }
}



export default findProductController;