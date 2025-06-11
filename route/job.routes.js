const express = require ("express");

const router = express.Router()
const jobController = require("../controller/job.controller");

router.post("/create-job",jobController.createjob)
router.get("/list-job",jobController.listjob)
router.put("/edit-job",jobController.editjob);
router.delete("/delete-job",jobController.deletejob)

module.exports = router;