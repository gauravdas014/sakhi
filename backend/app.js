const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const wishlistRouter = require("./routes/wishlistRoutes");
const cartRouter = require("./routes/cartRoutes");
const productRouter = require("./routes/productRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const jobRouter = require("./routes/jobRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Welcome to our API");
});

app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/cart", cartRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/job", jobRouter);

module.exports = app;
