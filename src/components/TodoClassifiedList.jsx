import React from "react";

export default function TodoClassifiedList() {
  return (
    <div key={i.id} className={styles.list}>
      <input
        type="checkbox"
        checked={i.check}
        onChange={() => onCheck({ id: i.id })}
      ></input>
      <li>{i.title}</li>
      <button onClick={(event) => onDelete({ event, id: i.id })}>삭제</button>
    </div>
  );
}
