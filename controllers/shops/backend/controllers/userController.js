import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
//  @desc Auth user & get token
//  @route POST /api/users/login
//  @access Public


const authUser = async (req,res) => {
    console.log("i will try to enter")
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        // if the user exists and the passwords match
        if (user && (await user.matchPassword(password))) { 
            res.json({
                _id: user._id, 
                name: user.name, 
                email: user.email,
                isAdmin: user.isAdmin,
                //  token will change later
                token: generateToken(user._id)
            })
        }else { 
            res.status(401).send("Invalid email or password!")
            // 401 is unauthorized
            throw new Error("Invalid email or password")
        }
    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}

// @desc register a new user
// @route POST /api/users
// @access Public



const registerUser = async (req,res) => {
    console.log("i will try to enter")
    try{
        const {name, email,password} = req.body;
        const userExists = await User.findOne({email});
        // if the user exists and the passwords match
       if (userExists){
        //    400 => bad request
           res.status(400);
           throw new Error("User Already Exists!");
        }

        // password will be encrypted in some mongoDB middleware
        const user = await User.create({name,email,password});

        if (user) { 
            // 201 => sth was created
            res.status(201).json({
                _id: user._id, 
                name: user.name, 
                email: user.email,
                isAdmin: user.isAdmin,
                //  token will change later
                token: generateToken(user._id)
            })
        }else { 
            res.status(400);
            throw new Error("Invalid User Data")
        }
    }catch(error){
        res.status(404).send(error)
        console.log(`There was an error: ${error}`.red.inverse);
    }
}



//  @desc  Get user profile
//  @route POST /api/users/profile
//  @access Private


const getUserProfile = async (req,res) => {
 
    try{
        // the current user
        const user = await User.findById(req.user._id);

        if (user){
            res.json({
                _id: user._id, 
                name: user.name, 
                email: user.email,
                isAdmin: user.isAdmin
            })
        }else{
            res.status(404)
            throw new Error("User Not Found!");
        } 

    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}

//  @desc  Update user profile
//  @route PUT /api/users/profile
//  @access Private

const updateUserProfile = async (req,res) => {
 
    try{
        // the current user
        const user = await User.findById(req.user._id);

        if (user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if(req.body.password){
                // it will be encrypted automatically because of the userModel.js
                user.password = req.body.password;
            };

            const updatedUser = await user.save();

                res.json({
                    _id: updatedUser._id, 
                    name: updatedUser.name, 
                    email: updatedUser.email,
                    isAdmin: updatedUser.isAdmin,
                    //  token will change later
                    token: generateToken(updatedUser._id)
                })
       
                // res.status(401).send("Invalid email or password!")
                // // 401 is unauthorized
                // throw new Error("Invalid email or password")
            
        }else{
            res.status(404)
            throw new Error("User Not Found!");
        } 

    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}




//  @desc  Get all users
//  @route GET /api/users/
//  @access Private / Admin
// you have to have logged in and be an Admin

const getUsers = async (req,res) => {
 
    try{
        // the current user
        const users = await User.find({});

        res.json(users);

    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}



//  @desc  Delete User
//  @route DELETE /api/users/:id
//  @access Private / Admin
// you have to have logged in and be an Admin

const deleteUser = async (req,res) => {
    console.log("DELETE USER: ENTERED")
    try{
        // the current user
        const user = await User.findById(req.params.id);
        if (user){
            await user.remove();
            res.json({message: "user removed!"})
        }else{
            res.status(404).send("User not found")
        }

    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}



//  @desc  get user by id
//  @route get /api/users/:id
//  @access Private / Admin
// you have to have logged in and be an Admin

const getUserById = async (req,res) => {

    try{
        // the current user
        const user = await User.findById(req.params.id).select("-password");
        if (user){
            res.json(user);
        }else{
            res.status(404).send("User not found")
        }

    }catch(error){
        console.log(`There was an error: ${error}`.red.inverse);
    }
}



//  @desc  update users
//  @route PUT /api/users/:id
//  @access Private / Admin
// you have to have logged in and be an Admin

const updateUser = async (req,res) => {
 
    try{
        // the current user
        const user = await User.findById(req.params.id);

        if (user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.isAdmin = req.body.isAdmin;

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id, 
                name: updatedUser.name, 
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
            })
            
        }else{
            res.status(404).send("user could not be updated!")
        } 

    }catch(error){
        console.log(`There was an error :( : ${error}`.red.inverse);
    }
}




export {authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser};