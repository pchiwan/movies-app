const express = require("express");
const router = express.Router();

const catalogController = require("../controllers/catalog");

router.get("/", catalogController.getAllMovies);
router.get("/categories/:category", catalogController.getByCategory);
router.get("/search", catalogController.searchByTitle);
router.get("/:id", catalogController.getMovieById);

module.exports = router;
