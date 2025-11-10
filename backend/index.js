const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require('cors');
const jwt = require("jsonwebtoken");

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Ensure upload folder exists
const uploadDir = path.join(__dirname, "upload", "images");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ MongoDB Connection
mongoose.connect(
  "mongodb+srv://anbu_bharathi:Anbu%40192002@cluster0.e0lnudf.mongodb.net/BuyZone?retryWrites=true&w=majority"
)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("🚀 Express App is Running Successfully!");
});

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ✅ Static Folder for Uploaded Images
app.use('/images', express.static(uploadDir));

// ✅ Image Upload API
app.post("/upload", upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded. Field name must be 'product'." });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// ✅ Product Schema
const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  old_price: { type: Number, required: true },
  new_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

// ✅ Prevent Model Overwrite Error
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

// ✅ Add Product (Fixed)
app.post('/addproduct', async (req, res) => {
  try {
    // Get the last product with the highest id safely
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;

    const product = new Product({
      id: newId,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price
    });

    await product.save();
    console.log("✅ Product Saved:", product.name);
    res.json({ success: true, name: product.name });
  } catch (err) {
    console.error("❌ Error saving product:", err);
    res.status(500).json({ success: false, message: "Error saving product", error: err.message });
  }
});


// ✅ Remove Product
app.post('/removeproduct', async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({ id: req.body.id });
    if (!deleted) return res.status(404).json({ success: false, message: "Product not found" });

    console.log("✅ Product Removed:", req.body.id);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error removing product:", err);
    res.status(500).json({ success: false });
  }
});

// ✅ Get All Products
app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ User Schema
const Users = mongoose.models.Users || mongoose.model("Users", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object, default: {} },
});

// ✅ Signup
app.post("/signup", async (req, res) => {
  try {
    const existing = await Users.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ success: false, errors: "User already exists" });
    }

    // Initialize empty cart
    let cart = {};
    for (let i = 0; i < 300; i++) cart[i] = 0;

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();
    const token = jwt.sign({ user: { id: user._id } }, "secret_ecom", { expiresIn: "1d" });
    res.json({ success: true, token });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ success: false });
  }
});

// ✅ Login
app.post('/login', async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) return res.json({ success: false, errors: "Invalid Email" });

    if (req.body.password !== user.password)
      return res.json({ success: false, errors: "Invalid Password" });

    const token = jwt.sign({ user: { id: user._id } }, "secret_ecom", { expiresIn: "1d" });
    res.json({ success: true, token });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ success: false });
  }
});

// ✅ New Collection
app.get('/newcollections', async (req, res) => {
  try {
    const products = await Product.find({});
    const newCollection = products.slice(-8);
    console.log("✅ New Collection fetched");
    res.json(newCollection);
  } catch (err) {
    console.error("❌ Error fetching new collections:", err);
    res.status(500).json({ error: "Failed to fetch new collections" });
  }
});

// ✅ Popular in Women
app.get('/popularinwomen', async (req, res) => {
  try {
    const products = await Product.find({ category: "women" });
    const popularInWomen = products.slice(-8);
    console.log("✅ Popular in Women fetched");
    res.json(popularInWomen);
  } catch (err) {
    console.error("❌ Error fetching popular in women:", err);
    res.status(500).json({ error: "Failed to fetch popular in women" });
  }
});

// ✅ JWT Middleware
const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ errors: "Please authenticate using a valid token" });

  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch {
    res.status(401).json({ errors: "Invalid token" });
  }
};

// ✅ Add to Cart
app.post('/addtocart', fetchUser, async (req, res) => {
  try {
    const userData = await Users.findById(req.user.id);
    const itemId = req.body.itemId; // ✅ consistent key name

    if (!userData.cartData[itemId]) userData.cartData[itemId] = 0;
    userData.cartData[itemId] += 1;
    await userData.save();

    console.log(`🛒 Added item ${itemId} to cart for user ${req.user.id}`);
    res.send("Added to cart");
  } catch (err) {
    console.error("❌ Error adding to cart:", err);
    res.status(500).send("Error");
  }
});

app.post('/removefromcart', fetchUser, async (req, res) => {
  try {
    const userData = await Users.findById(req.user.id);
    const itemId = req.body.itemId; // ✅ consistent key name

    if (userData.cartData[itemId] > 0) {
      userData.cartData[itemId] -= 1;
      await userData.save();
    }

    console.log(`🗑️ Removed item ${itemId} from cart for user ${req.user.id}`);
    res.send("Removed from cart");
  } catch (err) {
    console.error("❌ Error removing from cart:", err);
    res.status(500).send("Error");
  }
});


// ✅ Get Cart
app.post('/getcart', fetchUser, async (req, res) => {
  try {
    let userData = await Users.findById(req.user.id);
    res.json(userData.cartData);
  } catch (err) {
    console.error("❌ Error fetching cart:", err);
    res.status(500).send("Error");
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server Running on Port: ${port}`);
});
