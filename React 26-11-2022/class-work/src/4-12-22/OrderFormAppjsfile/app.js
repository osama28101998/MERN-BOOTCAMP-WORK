import { useState } from "react";
import TableData from "./4-12-22/Orderformcomponents/Table";
import Input from "./4-12-22/Orderformcomponents/textfield";
import "./App.css";

const App = () => {
  // let obj = {
  //   order_: [],
  //   pending_: [],
  //   completed_: [],
  // };
  const [dataarr, setdataarr] = useState([]);
  const [Order, setOrder] = useState("");
  const [pendingorder, setpendingorder] = useState("");
  const [completedorder, setcompletedorder] = useState("");

  const handleClick = () => {
    setdataarr([
      ...dataarr,
      {
        order: Order,

        pending: pendingorder,

        completed: completedorder,
      },
    ]);
    setOrder("");
    setpendingorder("");
    setcompletedorder("");
  };
  return (
    <div>
      <form class="row g-3">
        <Input label="Order" set={(so) => setOrder(so)} value={Order} />
        <Input
          label="Pending Order"
          set={(sp) => setpendingorder(sp)}
          value={pendingorder}
        />
        <Input
          label="Completed Order"
          set={(sc) => setcompletedorder(sc)}
          value={completedorder}
        />

        <button
          type="button"
          class="btn btn-primary"
          onClick={() => handleClick()}
        >
          Add
        </button>
      </form>
      <br />
      <TableData datarray={dataarr} />
    </div>
  );
};

export default App;
