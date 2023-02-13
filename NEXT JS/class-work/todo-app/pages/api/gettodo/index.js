import connectDb from "../../../database/connection";
import Todos from "../../../database/schema";

const getTodo = async (req, res) => {
  try {
    connectDb().catch((error) => console.log(error));
    const todos = await Todos.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: "some errors in fetching todos" });
  }
};

export default getTodo;
