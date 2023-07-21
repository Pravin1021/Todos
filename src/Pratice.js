import React, { useState } from "react";

const Pratice = () => {
  const [data, setData] = useState({ name: "", age: "" });
  const [master, setMaster] = useState([]);
  const [id, setId] = useState(null);
  const addfunc = (e) => {
    e.preventDefault();
    setMaster([...master, data]);
    setData({ name: "", age: "" });
  };
  const delfunc = (index) => {
    let del = master.filter((val, i) => i !== index);
    setMaster(del);
  };
  const editfunc = (index) => {
    setId(index);
    master.map((val, i) => (i == index ? setData(val) : val));
  };
  const updatefunc = () => {
    setMaster(master.map((val, i) => (i == id ? data : val)));
  };
  return (
    <>
      <div>
        <input
          placeholder="YOUR NAME"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          placeholder="AGE"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        <button onClick={addfunc}>ADD</button>
        <button onClick={updatefunc}>Update</button>
      </div>
      <div>
        {master.map((val, i) => (
          <ul key={i}>
            <li>{val.name}</li>
            <li>{val.age}</li>
            <button onClick={() => delfunc(i)}>Delete</button>
            <button onClick={() => editfunc(i)}>Edit</button>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Pratice;
