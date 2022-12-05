import React from "react";

const TableData = ({ datarray }) => {
  let orderarr = [];
  let pendingarr = [];
  let closedarr = [];
  datarray.map((a) => {
    orderarr.push(a.order);
  });
  datarray.map((a) => {
    pendingarr.push(a.pending);
  });
  datarray.map((a) => {
    closedarr.push(a.completed);
  });

  let orderresults = orderarr.filter((a) => {
    return a !== "";
  });
  let pendingesults = pendingarr.filter((element) => {
    return element !== "";
  });
  let closedresults = closedarr.filter((element) => {
    return element !== "";
  });

  return (
    <div>
      <table class="table  table-bordered ">
        <thead>
          <tr>
            <th scope="col">Order</th>
            {/* <th scope="col">Pending Order</th>
            <th scope="col">Completed Order</th> */}
          </tr>
        </thead>
        <tbody>
          {orderresults.length > 0 ? (
            orderresults.map((r) => {
              return (
                <tr>
                  <td>{r}</td>
                </tr>
              );
            })
          ) : (
            <tr>No Task</tr>
          )}
        </tbody>
      </table>
      <table class="table  table-bordered ">
        <thead>
          <tr>
            <th scope="col">Pending Order</th>
          </tr>
        </thead>
        <tbody>
          {pendingesults.length > 0 ? (
            pendingesults.map((p) => {
              return (
                <tr>
                  <td>{p}</td>
                </tr>
              );
            })
          ) : (
            <tr>No Task</tr>
          )}
        </tbody>
      </table>
      <table class="table  table-bordered ">
        <thead>
          <tr>
            <th scope="col">Completed Order</th>
          </tr>
        </thead>
        <tbody>
          {closedresults.length > 0 ? (
            closedresults.map((r) => {
              return (
                <tr>
                  <td>{r}</td>
                </tr>
              );
            })
          ) : (
            <tr>No Task</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
