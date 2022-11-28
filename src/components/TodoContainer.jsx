import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import styles from "./TodoContainer.module.css";
import { DarkModeContext } from "../context/DarkModeContext";

export default function TodoContainer() {
  const initialData = [
    { title: "밥먹기", id: "asd", check: false },
    { title: "똥싸기", id: "asdas", check: false },
  ];
  const [items, setItems] = useState(initialData);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(0);
  const [classification, setClassification] = useState("All");
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setItems((prev) => [...prev, { title: inputValue, id, check: false }]);
    setInputValue("");
    setId((prev) => prev + 1);
  };
  const onDelete = ({ event, id }) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onCheck = ({ id }) => {
    /* const a = items.find((item) => item.id === id);
    a.check = !a.check;
    setItems([...items]);
    // 이렇게 말고 다른방법 없나? */
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        } else {
          return item;
        }
      });
    });
  };
  const onClassSelect = ({ classification }) => {
    setClassification(classification);
  };

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <>
      {darkMode ? (
        <section className={styles.container_dark}>
          <button onClick={toggleDarkMode}>White</button>
          <div className={styles.classification}>
            <button
              onClick={() => onClassSelect({ classification: "All" })}
              className={styles.classButton}
            >
              All
            </button>
            <button
              onClick={() => onClassSelect({ classification: "Active" })}
              className={styles.classButton}
            >
              Active
            </button>
            <button
              onClick={() => onClassSelect({ classification: "Completed" })}
              className={styles.classButton}
            >
              Completed
            </button>
          </div>
          <TodoList
            items={items}
            onDelete={onDelete}
            onCheck={onCheck}
            classification={classification}
          />
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
      ) : (
        <section className={styles.container}>
          <button>Dark</button>
          <div className={styles.classification}>
            <button
              onClick={() => onClassSelect({ classification: "All" })}
              className={styles.classButton}
            >
              All
            </button>
            <button
              onClick={() => onClassSelect({ classification: "Active" })}
              className={styles.classButton}
            >
              Active
            </button>
            <button
              onClick={() => onClassSelect({ classification: "Completed" })}
              className={styles.classButton}
            >
              Completed
            </button>
          </div>
          <TodoList
            items={items}
            onDelete={onDelete}
            onCheck={onCheck}
            classification={classification}
          />
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
      )}
    </>
  );
}
