const express = require("express");
const app = express();


const {getCategoryById, createCategory,getCategory, getAllCategory, updateCategory, removeCategory} = require("../controllers/category");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//params
app.param("userId", getUserById);
app.param("categoryId", getCategoryById);

//actual routes

//create routes
app.post("/category/create/:userId",
 isSignedIn, 
 isAuthenticated,
 isAdmin, 
 createCategory
 );

 //read routes
app.get("/category/:categoryId", getCategory);
app.get("/categories", getAllCategory);

//update routes
app.put(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateCategory
  );


//delete routes
app.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
  );


module.exports = app;
