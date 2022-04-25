import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from "../config/db.js";


dotenv.config();

connectDB();



const importData = async () => {
    try{
       
   
        // createdUser is an array of the created users
        const createdUser = await User.insertMany(users);
        // its the first item in the users.js which is admin 
        const adminUser = createdUser[0]._id;
        // every product will have the property user: adminUser of the admin 
        const sampleProducts = products.map(product=>({
            ...product, user: adminUser
        }))

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    }catch(e){
        console.log(`there was an error: ${e}`.red.inverse);
    }
}




const destroyData = async () => {
    try{
        // this will delete everything, clear them out
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
     
        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    }catch(e){
        console.log(`there was an error: ${e}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2]==="-d"){
    destroyData();
}else{
    importData();
}