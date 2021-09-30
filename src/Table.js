import React from 'react'

export default function Table({tableData, deleteRow, editRow}) {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((val, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.address}</td>
                                <td>
                                    <button onClick={() => deleteRow(index)}>Delete</button>
                                    <button onClick={() => editRow(index)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }                    
                </tbody>
            </table>
        </div>
    )
}
