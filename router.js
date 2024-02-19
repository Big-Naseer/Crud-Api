const router = require("express").Router();
const { getTodos, createTodo , updateTodo, deleteTodo} = require("./controllers/Todo");


router.get("/todos", getTodos);

module.exports = router;

router.post("/todos", createTodo);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);
