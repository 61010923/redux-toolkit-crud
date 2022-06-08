import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/userSlice";

function App() {
  const data = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleBody = (e, setState) => {
    const { value } = e.target;
    setState(value);
  };
  console.log(data);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => handleBody(e, setName)}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => handleBody(e, setUsername)}
        />
        <button type="submit" onClick={() => dispatch(addUser({ id: data.length + 1, name, username }))}>add user</button>
      </div>
      <div>
        {data.slice(0).reverse().map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.username}</h2>
            <input
              type="text"
              placeholder="Name..."
              onChange={(e) => handleBody(e, setNewName)}
              // defaultValue={item.name}
            />
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => handleBody(e, setNewUsername)}
              // defaultValue={item.username}
            />

            <button
              type="submit"
              onClick={() => {
                dispatch(updateUsername({ id: item.id, name: newName, username: newUsername }));
              }}
            >
              edit

            </button>
            <button type="submit" onClick={() => dispatch(deleteUser({ id: item.id }))}>remove</button>
          </div>

        ))}
      </div>
    </>
  );
}

export default App;
