import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'


router.get('/', asyncHandler(async(req, res) =>{
    const categories = await Category.find({})
    res.json(categories)
}))

router.get('/:name', asyncHandler(async(req, res) =>{
    const category = await Category.find({name: req.params.name})
    if(category){
        res.json(category)
    }else{
        res.status(404).json({message: 'Category not found '})
    }
   
}))

export default router