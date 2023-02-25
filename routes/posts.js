const router = require("express").Router();
const postsCtrl = require("../controllers/posts.js");

router.get("/", postsCtrl.index);
router.get("/:id", postsCtrl.show);
router.post("/", postsCtrl.create);
router.delete("/:id", postsCtrl.delete);

module.exports = router;
