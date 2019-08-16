const express = require("express");
const app = express();
var inquirer = require("inquirer");
const mysql = require("mysql");

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

let products = [
    {
        routeName: "brush",
        itemID: "",
        productName: "Brush",
        departmentName: "Hygeine",
        price: 8,
        stockQuantity: 8
    },
    {
        routeName: "floss",
        itemID: "",
        productName: "Floss",
        departmentName: "Hygeine",
        price: 3,
        stockQuantity: 4
    },
    {
        routeName: "ball",
        itemID: "",
        productName: "Ball",
        departmentName: "Toys",
        price: 5,
        stockQuantity: 4
    },
    {
        routeName: "doll",
        itemID: "",
        productName: "Doll",
        departmentName: "Toys",
        price: 15,
        stockQuantity: 3
    },
    {
        routeName: "plates",
        itemID: "",
        productName: "Plates",
        departmentName: "Kitchen",
        price: 30,
        stockQuantity: 7
    },
    {
        routeName: "cuttingboard",
        itemID: "",
        productName: "Cutting Board",
        departmentName: "Kitchen",
        price: 12,
        stockQuantity: 2
    },
    {
        routeName: "shirt",
        itemID: "",
        productName: "Shirt",
        departmentName: "Clothing",
        price: 20,
        stockQuantity: 8
    },
    {
        routeName: "pants",
        itemID: "",
        productName: "Pants",
        departmentName: "Clothing",
        price: 8,
        stockQuantity: 8
    },
    {
        routeName: "beans",
        itemID: "",
        productName: "Beans",
        departmentName: "Food",
        price: 6,
        stockQuantity: 4
    },
    {
        routeName: "rice",
        itemID: "",
        productName: "Rice",
        departmentName: "Food",
        price: 8,
        stockQuantity: 5
    },
]

  app.get("/api/products", function(req, res) {
    return res.json(products);
  });
  
  app.get("/api/products/:product", function(req, res) {
    const chosen = req.params.product;
    console.log(chosen);
  
    for (var i = 0; i < products.length; i++) {
      if (chosen === products[i].routeName) {
        return res.json(products[i]);
      }
    }
    return res.json(false);
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });