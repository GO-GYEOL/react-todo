import React, { useState } from "react";
import styles from "./TodoList.module.css";

export default function TodoList({
  items,
  onDelete,
  onCheck,
  classification = "All",
}) {
  return (
    <ul>
      {classification === "All" &&
        items.map((i) => (
          <div key={i.id} className={styles.list}>
            <input
              type="checkbox"
              checked={i.check}
              onChange={() => onCheck({ id: i.id })}
            ></input>
            <li>{i.title}</li>
            <button onClick={(event) => onDelete({ event, id: i.id })}>
              삭제
            </button>
          </div>
        ))}
      {classification === "Active" &&
        items.map((i) => {
          if (i.check === false) {
            return (
              <div key={i.id} className={styles.list}>
                <input
                  type="checkbox"
                  checked={i.check}
                  onChange={() => onCheck({ id: i.id })}
                ></input>
                <li>{i.title}</li>
                <button onClick={(event) => onDelete({ event, id: i.id })}>
                  삭제
                </button>
              </div>
            );
          }
        })}
      {classification === "Completed" &&
        items.map((i) => {
          if (i.check === true) {
            return (
              <div key={i.id} className={styles.list}>
                <input
                  type="checkbox"
                  checked={i.check}
                  onChange={() => onCheck({ id: i.id })}
                ></input>
                <li>{i.title}</li>
                <button onClick={(event) => onDelete({ event, id: i.id })}>
                  삭제
                </button>
              </div>
            );
          }
        })}
    </ul>
  );
}
