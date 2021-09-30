import { useState } from 'react';
import './App.css';
import Table from './Table';

const data = [
  {
      "salesOrderNumber": "SO202100001",
      "customerName": "Mr Arif Khan",
      "status": "delivered",
      "orderDetails": {
          "totalProduct": 5,
          "totalAmount": 50000,
          "paidAmount": 30000
      }
  },
  {
      "salesOrderNumber": "SO202100002",
      "customerName": "Mr Sohan Ali",
      "status": "pending",
      "orderDetails": {
          "totalProduct": 3,
          "totalAmount": 40000,
          "paidAmount": 35000
      }
  },
  {
      "salesOrderNumber": "SO202100003",
      "customerName": "M/S Mayer dowa electonics",
      "status": "delivered",
      "orderDetails": {
          "totalProduct": 1,
          "totalAmount": 2000,
          "paidAmount": 2000
      }
  },
  {
      "salesOrderNumber": "SO202100004",
      "customerName": "Abdul Karim",
      "status": "partially-delivered",
      "orderDetails": {
          "totalProduct": 5,
          "totalAmount": 30000,
          "paidAmount": 0
      }
  }
];

function App() {

  const [searchString, setSearchString] = useState("");

  const filteredData = () => {
    if(searchString){
      return data.filter(x => {
        return (
          x.salesOrderNumber
            .toLocaleLowerCase()
            .match(searchString.toLocaleLowerCase()) ||
          x.status === searchString
        );
      });
    }
    return data;
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearchString(e.target.value)}/>
      <Table tableData={filteredData()} />
    </div>
  );
}

export default App;
