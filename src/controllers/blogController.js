const Blog = require("../models/Blog");

const getAllPost = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs) {
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Blog list",
        data: blogs,
      });
    } else {
      return res.status(300).json({
        code: 300,
        success: false,
        message: "Something went wrong while fetching blog",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const blog = await Blog.find({ _id: req.params.blogId });
    if (blog) {
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Blog find successfully",
        data: blog,
      });
    } else {
      return res.status(300).json({
        code: 300,
        success: false,
        message: "Something went wrong while fetching blog",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
    return res.status(200).json({
      code: 200,
      success: true,
      message: "Post created successfully",
      data: savedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { blogId, ...dataToUpdate } = req.body;
    const updateBlog = await Blog.updateOne(
      { _id: blogId },
      { $set: dataToUpdate }
    );
    if (updateBlog) {
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Blog Updated successfully",
        data: updateBlog,
      });
    } else {
      return res.status(300).json({
        code: 300,
        success: false,
        message: "Something went wrong while updating blog",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const deleteBlog = await Blog.deleteOne({ _id: blogId });
    if (deleteBlog) {
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Blog Deleted successfully",
        data: deleteBlog,
      });
    } else {
      return res.status(300).json({
        code: 300,
        success: false,
        message: "Something went wrong while deleting blog",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPost, getPost, createPost, updatePost, deletePost };
