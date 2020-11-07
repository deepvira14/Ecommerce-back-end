const express = require("express");
const app = express();


const {getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories} = require("../controllers/product");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//all of params
app.param("userId", getUserById);
app.param("productId", getProductById);

//all of routes
//create
app.post(
    "/product/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createProduct
);


//read
app.get("/product/:productId", getProduct);
app.get("/product/photo/:productId", photo);


//delete
app.delete(
    "/product/:productId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    deleteProduct
);

//update
app.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);


//listing 
app.get("/products", getAllProducts);

app.get("/products/categories", getAllUniqueCategories);



module.exports = app;