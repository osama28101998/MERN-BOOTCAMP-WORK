import logo from "./logo.svg";
import "./App.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Spent from "./Components/Spent";
import Exp from "./Components/Expenselist";
import Addexpense from "./Components/Addexpense";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> My Budget Planner</h1>

      <div>
        <Budget />
      </div>
      <div>
        <Remaining />
      </div>
      <div>
        <Spent />
      </div>

      <div>
        <h2>Expenses</h2>
      </div>

      <div>
        <Exp />
      </div>

      <div>
        <h3>Add Expenses</h3>
      </div>

      <div>
        <Addexpense />
      </div>
    </div>
  );
}

export default App;
