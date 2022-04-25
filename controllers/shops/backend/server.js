import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
import morgan from "morgan";
import connectDB from "../config/db.js";



dotenv.config(); 
connectDB();


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// running in development mode
if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"));
}



// http://localhost:5001/api/users/login



app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

// to make a folder static -> accessible
// so the path resolves and brings the __dirname
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));