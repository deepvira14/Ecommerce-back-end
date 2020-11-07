const express = require("express");
const app = express();

const { getUserById, getUser, updateUser, userPurchaseList} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");


app.param("userId", getUserById);

app.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
app.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

app.get("/orders/user/:userId", isSignedIn, isAuthenticated, updateUser,userPurchaseList);




module.exports = app; 
