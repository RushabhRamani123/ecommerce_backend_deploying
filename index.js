const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// routes authentication
const userRoutes = require("./src/routes/auth");
// routes of the admin
const adminRoutes = require("./src/routes/admin/auth");
// routes for the category
const categoryRoutes = require("./src/routes/category");
// routes for the product
const productRoutes = require("./src/routes/product");
// routes for the cart
const cartRoutes = require("./src/routes/cart");
// routes for the initialData 
const initialDataRotes = require("./src/routes/admin/intialData");
// routes for the page
const pageRoutes = require("./src/routes/admin/page");
// roues for the order
const orderRoutes = require("./src/routes/order");
// routes for the order admin
const adminOrderRoutes = require("./src/routes/admin/order");
// environment variables or constants
const addressRoutes = require("./src/routes/address");
// environment variables or constant 
const firltilizerRoutes = require("./src/routes/firtilizers")
//database connection
const mongoose = require("mongoose");
// cors
const cors = require("cors");
 mongoose.connect(process.env.MONGODB_CONNECT_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) .then(() => {
  console.log("Database connected");
})
.catch((err) => {
  console.log(err);
});

 
app.use(cors());
app.use(express.json());
app.use("/api", pageRoutes);
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRotes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoutes);
app.use("/api", firltilizerRoutes)
//listening to the port
app.listen(process.env.PORT||8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
