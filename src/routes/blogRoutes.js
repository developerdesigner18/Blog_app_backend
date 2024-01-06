const express = require("express");
const { createPost } = require("../controllers/blogController");
const { verifyToken } = require("../middleware/authenticator");

const router = express.Router();

router.post("/createPost", verifyToken, createPost);

module.exports = router;
