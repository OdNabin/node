const express = require('express');
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} = require('../controller/postcarearcontroller');

const routerss = express.Router();

// Create a new career post
routerss.post('/create', createPost);

// Get all career posts
routerss.get('/', getPosts);

// Get a single career post by ID
routerss.get('/:id', getPostById);

// Update a career post by ID
routerss.put('/update/:id', updatePost);

// Delete a career post by ID
routerss.delete('/delete/:id', deletePost);

module.exports = routerss;
