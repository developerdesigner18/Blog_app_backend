const Blog = require("../models/Blog");

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.id;

  try {
    const newBlog = new Blog({
      title,
      content,
      author,
    });
    const savedBlog = await newBlog.save();
    res.status(200).json({
      code: 200,
      success: true,
      message: "Post created successfully",
      data: savedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost };
