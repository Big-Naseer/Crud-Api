const Todo = require("../Model/Todo");


const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };
  

  const createTodo = async (req, res) => {
    try{
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
  
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

   
  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
  };
