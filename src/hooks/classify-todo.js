import { useEffect, useState } from "react";

export default function useClassifiedItems({ classification }) {
  const [classifiedItems, setClassifiedItems] = useState(items);
  switch (classification) {
    case "All":
      setClassifiedItems(items);
      break;
    case "Active":
      setClassifiedItems((prev) => prev.filter((item) => item.check === false));
      break;
    case "Completed":
      setClassifiedItems((prev) => prev.filter((item) => item.check === true));
      break;
  }

  return [classifiedItems];
  // 이렇게 세 개를 묶어서 반환해주도록 한다.
}
