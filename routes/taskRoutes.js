const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  createTaskWithCheck,
} = require("../controllers/taskController");

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.post("/tasks/check", createTaskWithCheck);

module.exports = router;
