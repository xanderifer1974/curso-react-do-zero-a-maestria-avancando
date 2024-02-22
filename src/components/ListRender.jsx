import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    "Alexandre",
    "João",
    "Miguel",
    "Rafael",
    "Gabriel",
    "Gael",
  ]);
  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ListRender;
