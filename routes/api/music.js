const router = require("express").Router();
const musicController = require("../../controllers/musicController");

// Matches with "/api/music"
router.route("/")
  .get(musicController.findAll)
  .post(musicController.create);

// Matches with "/api/music/:id"
router
  .route("/:id")
  .get(musicController.findById)
  .put(musicController.update)
  .delete(musicController.remove);

module.exports = router;
