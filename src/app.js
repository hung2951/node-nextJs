import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import ordersRoute from '../routes/orders'
import orderDetailRoute from '../routes/order-detail'
import userRoute from "../routes/user"
import authRoute from "../routes/auth"
import productRoute from '../routes/product';

import categoryRouter from '../routes/category'
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
// 
app.use('/api',ordersRoute)
app.use('/api',orderDetailRoute)
// router
app.use("/api",categoryRouter)     


app.use("/api", userRoute)
app.use("/api", authRoute)

//route products
app.use("/api", productRoute);
// connnect database
// mongoose.connect('mongodb://localhost:27017/nextjs')
mongoose.connect('mongodb://localhost:27017/nextjs')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})