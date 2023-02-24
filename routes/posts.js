const router = require("express").Router();
const postsCtrl = require("../controllers/posts.js");

router.post("/", postsCtrl.create);

module.exports = router;
