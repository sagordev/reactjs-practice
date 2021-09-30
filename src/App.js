import { useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const doSave = () => {
    const user = {
      name,
      email,
      address
    }
    setData([...data, user]);
    setName("");
    setEmail("");
    setAddress("");
  }

  const deleteRow = (index) => {
    let newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  const editRow = (index) => {
    const row = data[index];
    setEditingIndex(index);
    setName(row.name);
    setEmail(row.email);
    setAddress(row.address);
  }

  const doUpdate = () => {
    let newData = [...data];
    let row = newData[editingIndex];
    row.name = name;
    row.email = email;
    row.address = address;
    newData[editingIndex] = row;
    setData(newData);
    setName("");
    setEmail("");
    setAddress("");
    setEditingIndex(null);
  }

  return (
    <div className="App">
      <div style={{ width: "50%", display: "inline-block" }}>
        <div>
          <label>Name</label>
          <br />
          <input type="text"
            onChange={(e) => setName(e.target.value)} value={name} />
          <br />
          <label>Email</label>
          <br />
          <input type="text"
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <br />
          <label>Address</label>
          <br />
          <input type="text" 
            onChange={(e) => setAddress(e.target.value)} value={address} />
          <br />
          {
            editingIndex !== null ?
            <>
              <button onClick={doUpdate}>Update</button>
              <button onClick={() => setEditingIndex(null)}>Add new</button>
            </>
            :
            <button onClick={doSave}>Save</button>
          }
        </div>
      </div>
      <div style={{ width: "50%", display: "inline-block" }}>
        <Table tableData={data}
          deleteRow={deleteRow}
          editRow={editRow}/>
      </div>
    </div>
  );
}

export default App;
