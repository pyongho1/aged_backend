const { Post } = require("../models");

const index = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const show = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    post.set(req.body);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  create,
  index,
  show,
  delete: deletePost,
  update,
};
