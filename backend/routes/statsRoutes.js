const express = require("express");
const router  = express.Router();
const { getStats, clearCache } = require("../controllers/statscontroller");

router.get("/",       getStats);
router.post("/clear", clearCache);   // POST /api/stats/clear

module.exports = router;
