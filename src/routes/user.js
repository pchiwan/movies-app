const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { isAllowed } = require("../middleware/authorization");

router.get("/favorites", isAllowed, userController.getAllFavorites);
router.post("/favorites", isAllowed, userController.addToFavorites);
router.delete("/favorites/:id", isAllowed, userController.deleteFavorite);

module.exports = router;
