const Blog = require("../model/blogModel");

// Create a new blog post
const createBlog = async (req, res) => {
  const { title, img, author, content } = req.body;
  try {
    if (!title || !author || !content || !img) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (
      title.trim().length === 0 ||
      author.trim().length === 0 ||
      content.trim().length === 0 ||
      img.trim().length === 0
    ) {
      return res.status(400).json({ message: "Input fields cannot be empty" });
    }

    const newBlog = await Blog.create({
      title,
      img,
      author,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(200).json(newBlog);
  } catch (error) {
    return res.status(400).json({ status: "FAILED", message: "Error: " + error });
  }
};

// Fetch all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(400).json({ status: "FAILED", message: "Error: " + error });
  }
};

// Fetch a single blog post by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ status: "FAILED", message: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ status: "FAILED", message: "Error: " + error });
  }
};

// Update an existing blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, author, content, img } = req.body;
  try {
    if (!title || !author || !content || !img) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, author, content, img, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(400).json({ status: "FAILED", message: "Error: " + error });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(deletedBlog);
  } catch (error) {
    return res.status(400).json({ status: "FAILED", message: "Error: " + error });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
