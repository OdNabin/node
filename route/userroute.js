const express = require("express");
const { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } = require("../controller/blogcontroller");
const router = express.Router();

router.post("/create", createBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogById);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
