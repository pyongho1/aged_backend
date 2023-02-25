const router = require("express").Router();
const postsCtrl = require("../controllers/posts.js");

router.get("/", postsCtrl.index);
router.get("/:id", postsCtrl.show);
router.post("/", postsCtrl.create);

module.exports = router;
