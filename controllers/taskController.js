const Task = require("../models/Task");

// const createTask = (req, res) => {
//   const { title } = req.body;
//   if (!title) return res.status(400).json({ msg: "Title is required" });

//   Task.create({ title }).then((task) => {
//     res.status(200).json({ msg: "Task Created", data: task });
//   });
// };
//================
const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ msg: "Title is required" });
    const exist = await Task.findone({ title });
    if (exist) return res.status(400).json({ msg: "task already exist" })
    const task = await tesk.create({ title })
    res.status(201).json({ msg: "Task Created Successfully", data: task })
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
}

//===================================
// const getTasks = (req, res) => {
//   Task.find().then((tasks) => {
//     res.status(200).json({ msg: "Tasks List", data: tasks });
//   });
// };
//=====================
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(500).json({ msg: "task list", data: tasks })
  } catch (err) {
    res.status(500).json({ msg: "server error", error: error.message })
  }
}


module.exports = {
  createTask,
  getTasks
};
