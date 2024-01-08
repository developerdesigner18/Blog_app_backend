const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getAllPost,
  getPost,
} = require("../controllers/blogController");
const { verifyToken } = require("../middleware/authenticator");

const router = express.Router();

router.get("/getAllPost", getAllPost);
router.get("/getPost/:blogId", getPost);
router.post("/createPost", verifyToken, createPost);
router.post("/updatePost", verifyToken, updatePost);
router.delete("/deletePost/:blogId", verifyToken, deletePost);

module.exports = router;
