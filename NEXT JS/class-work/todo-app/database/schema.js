import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
  task: String,
  status: Boolean,
});

const Todos =
  mongoose.models.Todo || mongoose.model("Todo", todoschema, "Todo");
export default Todos;
