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
  
// const updateTodo = async (req, res) => {
//   try {
//     const todo = await Todo.findByIdAndUpdate(req.params.id);
//     if (!todo) {
//       return res.status(404).json({ error: 'Todo not found' });
//     } else {
//       req.body.Todo
//     }
//     res.json(Todo);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const updateTodo = async (req, res) => {
  const {id} = req.params;
  const {title, description, completed} = req.body;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    const updatedTodoData ={}
    if (title) {
      updatedTodoData.title = title
    }
    
    if (description) {
      updatedTodoData.description = description
    }
    
    if (completed) {
      updatedTodoData.completed = completed
    }
    
    return res.status(200).json({message: "Profile Updated Successfully", updatedTodoData})
    const updatedTodo = await Todo.findByIdAndUpdate(id,updatedTodo, {new: true});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
  };
   
  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
