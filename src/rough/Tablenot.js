import React from 'react'
// import { Link } from 'react-router-dom';
import { useTable ,usePagination } from 'react-table';


function Table() {
const data=[
  {
    srno:1,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:2,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:3,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:4,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:5,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:6,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:7,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:8,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:9,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:10,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:11,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
  {
    srno:12,
    firstName:"manish",
    lastName:"prajapat",
    gender:"male",
    dob:"22-03-2001",
    email:"manish@gmail.com",
    pin:1234,
    phone:123,
    status:false,
    city:"Jaipur"
},
];

    const columns = [
        { Header: 'S.N.', accessor: 'srno' },
        { Header: 'firstName', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'GENDER', accessor: 'gender' },
        { Header: 'DOB', accessor: 'dob' },
        { Header: 'email', accessor: 'email' },
        { Header: 'PHONE NUMBER', accessor: 'phone' },
        { Header: 'CITY', accessor: 'city' },
        { Header: 'PIN', accessor: 'pin' },
        // { Header: 'STATUS', accessor: 'status' },
        // { Header: 'ACTION', accessor: 'action' },
      ];
    let  { getTableProps, getTableBodyProps,headerGroups,page,prepareRow,
      nextPage,previousPage,
      canNextPage, canPreviousPage}=useTable(
        { columns, data, },
        usePagination
      )
  return (
    <>
          <div className='table-responsive'>
          <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>


      <div>
        <button disabled={!canPreviousPage} onClick={() => previousPage()}>Previous Page</button>
        <button disabled={!canNextPage} onClick={() => nextPage()}>Next Page</button>

      </div>
      </div>

    
    </>
  )
}

export default Table
