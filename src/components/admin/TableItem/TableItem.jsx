import React from "react";

const TableItem = ({item}) => {
  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td><img width="100px" height="100px" src={item.image} alt="" /></td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
      </tr>
    </>
  );
};

export default TableItem;
