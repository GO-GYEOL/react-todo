import React, { useState } from "react";
import TodoList from "./TodoList";
import styles from "./TodoContainer.module.css";

export default function TodoContainer() {
  const initialData = [{ title: "밥먹기" }, { title: "똥싸기" }];
  const [items, setItems] = useState(initialData);
  const [inputValue, setInputValue] = useState("");
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setItems((prev) => [...prev, { title: inputValue }]);
    setInputValue("");
  };
  return (
    <section className={styles.container}>
      <TodoList items={items} />
      <form onSubmit={onSubmit} className={styles.inputLine}>
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
    </section>
  );
}
