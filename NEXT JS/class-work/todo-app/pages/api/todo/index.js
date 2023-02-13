import connectDb from "../../../database/connection";
import todo from "../../../database/schema";

export default function setTodo(req, res) {
  try {
    let body = req.body;
    console.log(body);
    connectDb().catch((error) => console.log(error));
    const create = new todo({ task: "koi kam kerna hai", status: false });
    create.save().then(() => {
      res.status(200).json(create);
    });
  } catch (error) {
    res.status(404).json({ message: "some errors" });
  }
}
