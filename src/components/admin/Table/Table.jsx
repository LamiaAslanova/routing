import React from "react";
import TableItem from "../TableItem/TableItem";

const Table = ({items}) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, index) => {
                return <TableItem key={index} item={item}/>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
