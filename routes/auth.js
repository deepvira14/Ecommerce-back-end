var express = require("express");
var app = express();
const { body, validationResult } = require('express-validator');

const { signout, signup, signin, isSignedIn} =require("../controllers/auth");
const { check } = require('express-validator');
const { Router } = require("express");

app.post(
    "/signup",
     [
    check("name", "name should be stleast 3 letter").isLength({ min: 3}),
    check("email", "email is required").isEmail(),
    check("password", "password atleast 3 required").isLength({ min: 3}),
    ],
    signup
);


app.post(
    "/signin",
     [
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 1}),
    ],
    signin
);



app.get("/signout", signout);


module.exports = app;