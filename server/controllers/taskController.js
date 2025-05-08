const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.user._id });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTasks = async (req, res) => {
  const { status, date, search, page = 1 } = req.query;
  const query = { userId: req.user._id };

  if (status) query.status = status;
  if (date) {
    const d = new Date(date);
    query.createdAt = {
      $gte: new Date(d.setHours(0, 0, 0, 0)),
      $lt: new Date(d.setHours(23, 59, 59, 999))
    };
  }
  if (search) query.name = { $regex: search, $options: 'i' };

  try {
    const tasks = await Task.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * 10)
      .limit(10);
    const total = await Task.countDocuments(query);
    res.json({ tasks, totalPages: Math.ceil(total / 10) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
