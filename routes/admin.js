const express = require("express");
const { check, body } = require("express-validator/check");
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  isAuth,
  [
    body("title", "Please enter a title with at least 3 characters.")
      .isString()
      .isLength({
        min: 3,
      })
      .trim(),
    // body("img", "Please enter a valid URL.").isURL(),
    body("price", "Please enter a valid number.").isFloat(),
    body("description", "Please enter a description with between 5 and 400 characters.")
      .isLength({
        min: 5,
        max: 400,
      })
      .trim(),
  ],
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  isAuth,
  [
    body("title", "Please enter a title with at least 3 characters.")
      .isString()
      .isLength({
        min: 3,
      })
      .trim(),
    // body("imgUrl", "Please enter a valid URL.").isURL(),
    body("price", "Please enter a valid number.").isFloat(),
    body("description", "Please enter a description with between 5 and 400 characters.")
      .isLength({
        min: 5,
        max: 400,
      })
      .trim(),
  ],
  adminController.postEditProduct
);

router.delete("/product/:id", isAuth, adminController.deleteProduct);

module.exports = router;
