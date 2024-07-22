const Postcarear = require('../model/postcarearModel');

// Create a new career post
const createPost = async (req, res) => {
  try {
    const newPost = new Postcarear(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all career posts
const getPosts = async (req, res) => {
  try {
    const posts = await Postcarear.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single career post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Postcarear.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a career post by ID
const updatePost = async (req, res) => {
  try {
    const post = await Postcarear.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a career post by ID
const deletePost = async (req, res) => {
  try {
    const post = await Postcarear.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
