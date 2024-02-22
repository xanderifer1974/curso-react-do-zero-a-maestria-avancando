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

  const [users, setUsers] = useState([
    { id: 1, name: "Alexandre", age: 49 },
    { id: 2, name: "Rafael", age: 35 },
    { id: 3, name: "João", age: 20 },
    { id: 4, name: "Maria", age: 55 },
    { id: 5, name: "Antonio", age: 33 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id);
    });
};


  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
