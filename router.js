const router = require("express").Router();
const { getTodos, createTodo , updateTodo} = require("./controllers/Todo");


router.get("/todos", getTodos);

module.exports = router;

router.post("/todos", createTodo);

router.put("/todos/:todoID", updateTodo);