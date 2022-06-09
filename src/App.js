import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/userSlice";

function App() {
  const data = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isId, setIsId] = useState(null);

  const handleBody = (e, setState) => {
    const { value } = e.target;
    setState(value);
  };
  const handleSubmit = () => {
    if (name !== "" && username !== "") {
      if (isEdit) {
        dispatch(updateUsername({ id: isId, name, username }));
        setName("");
        setUsername("");
        setIsEdit(false);
        setIsId(null);
      } else {
        dispatch(addUser({ id: data.length + 1, name, username }));
        setName("");
        setUsername("");
      }
    }
  };
  console.log(isId);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => handleBody(e, setName)}
          value={name}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => handleBody(e, setUsername)}
          value={username}
        />
        <button type="submit" onClick={() => { handleSubmit(isId); }}>{isEdit ? "Edit" : "add user"}</button>
      </div>
      <div>
        {data.slice(0).reverse().map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.username}</h2>
            <button
              type="submit"
              onClick={() => {
                setIsEdit(true);
                setIsId(item.id);
                setName(item.name);
                setUsername(item.username);
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
