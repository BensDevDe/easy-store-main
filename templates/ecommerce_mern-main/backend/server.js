import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5001;

//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

//Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config()
connectDB()
const app = express()
app.use(express.json())


//PRODUCT ROUTE
app.use('/api/products', productRoutes);

//USER ROUTE
app.use('/api/users', userRoutes);

//USER ROUTE
app.use('/api/orders', orderRoutes)

//UPLOAD ROUTE
app.use('/api/upload', uploadRoutes)

//CATEGORIES ROUTE
app.use('/api/categories', categoryRoutes)

//PAYPAL CLIENT
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

//upload - path
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

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

//middleware to custom error handling for a 404 (no route connected)
app.use(notFound)
//Middleware to custom error Handling for something connected to a route
app.use(errorHandler)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))