import bcrypt from "bcryptjs";

const users = [ 
    {
        name: "Antonis User",
        email: "antonis@outlook.de",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },

    {
        name: "John Doe",
        email: "john@outlook.de",
        password: bcrypt.hashSync("123456", 10)
    },

    {
        name: "Jane Doe",
        email: "jane@outlook.de",
        password: bcrypt.hashSync("123456", 10)
    }
];

// bcrypt.hashSync will hash the password, in this case the password '123456' with 10 rounds

export default users;