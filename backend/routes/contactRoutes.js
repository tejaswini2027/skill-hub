const express =
require("express");

const router =
express.Router();

const {
  saveMessage
}
=
require(
  "../controllers/contactController"
);

const {
  getMessage
}
=
require(
  "../controllers/contactController"
);

router.post(
  "/",
  saveMessage
);

router.get(
  "/",
  getMessage
);


module.exports = router;
