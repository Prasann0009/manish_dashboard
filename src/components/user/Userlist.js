import React, { useEffect, useState } from 'react'
import Header from '../Header'
// import avtar from '../../assets/images/user/avatar-1.jpg'
// import { Link } from 'react-router-dom'
// import { useTable,usePagination } from 'react-table';
// import axios from 'axios';
// import header from '../Header';
import Swal from 'sweetalert2';
import {toast ,Bounce} from 'react-toastify';
// import DataTable from './Table';
// import UserDataTable from '../table/TableFilter';
import UserDataTable from '../Table/UserDataTable';
import { Link } from 'react-router-dom';
// import DataTable from './column/filtercolum';
function Userlist() {
  let [tableData,setTableData]=useState([]);
  // console.log((localStorage.getItem ("token")))
  useEffect(()=>{
    let apiCall=async ()=>{
      let res = await fetch(`http://localhost:8080/api/user/all_data`, {
        method: "GET",
        headers: {
          "Authorization":(localStorage.getItem ("token"))
        }
      });
        const result=await res.json();
        // console.log(result.data);
        setTableData([...result?.data])
  };
  apiCall();
},[]);
const handleStatus=(id)=>{
  // console.log(id);
  let apiCall=async ()=>{
    let res = await fetch(`http://localhost:8080/api/user/userstatus/${id}`, {
      method: "GET",
      headers: {
        "Authorization":(localStorage.getItem ("token"))
      }
    });
      const result=await res.json();
      // console.log(result?.data);
      if(result.status){
        toast.error(result.message, {
          position: "top-right",
          autoClose: 1000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return
      }
      toast.success(result.message, {
        position: "top-right",
        autoClose: 1000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTableData([...result?.data])
};
apiCall();
};


const handleDelete=(id)=>{
  console.log(id);
  
    let apiCall=async ()=>{
      let res = await fetch(`http://localhost:8080/api/user/deleteuser/${id}`, {
        method: "GET",
        headers: {
          "Authorization":(localStorage.getItem ("token"))
        }
      });
        const result=await res.json();
        console.log(result);
        if(result.status){
          toast.error(result.message, {
            position: "top-right",
            autoClose: 1000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          return true
        }else{
          console.log(result?.data);
          let deletedUser=result?.data
          setTableData(tableData.filter((arr)=>arr?._id != deletedUser?._id))
        }
  };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       apiCall().then((res)=>{
          console.log(res)
          if(res){
            return
          }else{
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
       })
      //  console.log(a)
        
       
      }
    });
}

  // const data = [
  //   { id: 1, name: 'John', age: 30 },
  //   { id: 2, name: 'Doe', age: 25 },
  //   // Add more data as needed
  // ];
  const data = tableData;
  const columns = [
    // { Header: 'S.N', accessor: 'sNo' },
    { Header: 'firstName', accessor: 'firstName'  },
    // { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'GENDER', accessor: 'gender' },
    { Header: 'DOB', accessor: 'dob' },
    // { Header: 'email', accessor: 'email' },
    { Header: 'PHONE NUMBER', accessor: 'phone' },
    // { Header: 'CITY', accessor: 'city' },
    { Header: 'PIN', accessor: 'pin'},
    // { Header: 'STATUS', accessor: 'status' },
    // { Header: 'ACTION', accessor: 'action' },
  ];
  // const columns = [
  //   { Header: 'S.N', accessor: 'sNo', Filter:ColFilterform , disableFilters:true },
  //   { Header: 'firstName', accessor: 'firstName', Filter:ColFilterform,  },
  //   // { Header: 'Last Name', accessor: 'lastName' },
  //   { Header: 'GENDER', accessor: 'gender', Filter:ColFilterform, disableFilters:true },
  //   { Header: 'DOB', accessor: 'dob' , Filter:ColFilterform  ,disableFilters:true},
  //   // { Header: 'email', accessor: 'email' },
  //   { Header: 'PHONE NUMBER', accessor: 'phone', Filter:ColFilterform ,disableFilters:true },
  //   // { Header: 'CITY', accessor: 'city' },
  //   { Header: 'PIN', accessor: 'pin', Filter:ColFilterform ,disableFilters:true },
  //   // { Header: 'STATUS', accessor: 'status' },
  //   // { Header: 'ACTION', accessor: 'action' },
  // ];

  // function DataTable({ columns, data }) {
  //   const { getTableProps, getTableBodyProps,headerGroups,page,prepareRow,
  //   nextPage,previousPage,canPreviousPage,canNextPage} = useTable({ columns, data },usePagination);
  
  //   return (
  //     <div className='table-responsive'>
  //       <table {...getTableProps()} className='table table-bordered'>
  //       <thead>
  //         {headerGroups.map(headerGroup => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map(column => (
  //               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
  //             ))}
  //             <th>Status</th>
  //             <th>action</th>
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {page.map(row => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map(cell => (
  //                <>
  //                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  //                 {/* <td> actoin</td> */}
  //                </> 
  //               ))}
  //               <td>
  //                   {row.cells[0].row.original.status === true ? (
  //                     <button className='btn btn-success'onClick={()=>handleStatus(row.cells[0].row.original._id)}>Active</button>
  //                   ) : (
  //                     <button className='btn btn-danger' onClick={()=>handleStatus(row.cells[0].row.original._id)}>Inactive</button>
  //                   )}
  //               </td>
  //                <td>
  //                 {/* <button >{console.log(row.cells[0].row.original._id)}</button> */}
  //                 <Link to={`/user-details/${row.cells[0].row.original._id}`} className='btn btn-info btn-sm'>
  //                   <i class="fas fa-eye"></i>
  //                   </Link>
  //                   <Link to='' onClick={()=>handleDelete(row.cells[0].row.original._id)} className='btn btn-danger btn-sm'>
  //                   <i class="fas fa-trash"></i>
  //                   </Link>
  //               </td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //     <div>
  //       <button disabled={!canPreviousPage} onClick={() => previousPage()}>Previous Page</button>
  //       <button disabled={!canNextPage} onClick={() => nextPage()}>Next Page</button>

  //     </div>
  //     </div>
  //   );
  // }
  
 
  return (
    <>
    <Header/>
  <div className="pc-container">
   <div className="pc-content">
      <div className="page-header">
         <div className="page-block">
            <div className="row align-items-center">
               <div className="col-md-12">
                  <ul className="breadcrumb">
                     <li className="breadcrumb-item">
                        <a href="../dashboard/index.html">Dashboard</a>
                     </li>
                     <li className="breadcrumb-item">
                        <a href="javascript: void(0)">User Management</a>
                     </li>
                     <li className="breadcrumb-item" aria-current="page">
                        User List
                     </li>
                  </ul>
               </div>
               <div className="col-md-12">
                  <div className="page-header-title">
                     <h2 className='mb-3'>User List</h2>
                  </div>
               </div>
               <div className="col-sm-12">
  <div className="card">
    <div className="card-header mb-3">
      <h5 className='d-flex justify-content-between align-items-center'> <span>User List</span>
        <Link to='/adduser' className='btn btn-primary'>Add User</Link>
      </h5>
          </div>
            <div>
              {/* <DataTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete}/> */}
              <UserDataTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete}/>
            </div>  
          
          </div>
        </div>
         
               
            </div>
         </div>
      </div>
   </div>
</div>
    </>
  )
}

export default Userlist