const express = require("express");
const router = express.Router();
const Book = require("../models/books");

// All Book Route
router.get("/", async (req, res) => {});

//New Book Route
router.get("/new", (req, res) => {});

// Create Book Route
router.post("/", async (req, res) => {});

module.exports = router;
