const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product_controler"); // Đảm bảo tên đúng

router.get("/", ProductController.index); // Sử dụng biến đúng tên

module.exports = router;
