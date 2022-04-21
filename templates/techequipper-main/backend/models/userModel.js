import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema  = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

// timestamps will create the fields when it was created / updated etc

// i can add methods to the userSchema and access them from another place
userSchema.methods.matchPassword = async function (enteredPassword) { 
    // we call it on this specific user, so we can access
    // their password / any of their fields through "this"
    return await bcrypt.compare(enteredPassword, this.password);
}

// it will happen pre- save (before i save)
userSchema.pre("save", async function(next){
    
    // if it has not been motified i run this if 
    if(!this.isModified("password")){
        next();
    }

    // if it has been modified this will run 

    const salt = await bcrypt.genSalt(10);
    // reflects the user i am creating, the password
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", userSchema);

export default User;

