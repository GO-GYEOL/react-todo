import React, { useState } from "react";

export default function TodoList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li>{i.title}</li>
      ))}
    </ul>
  );
}
