import React from 'react'
import { Link } from 'react-router-dom'
import defaultimg from '../../assets/images/default.jpg'
import { useTable,usePagination ,useGlobalFilter} from 'react-table';
import Filterform from './Filterform';

function VideoTable({ columns, data,handleStatus,handleDelete ,isLiveCourse}) {

    const { getTableProps, getTableBodyProps,headerGroups,page,prepareRow,
    nextPage,previousPage,canPreviousPage,canNextPage,state:{pageIndex},pageCount,gotoPage,state,setGlobalFilter} = useTable({ columns, data} ,useGlobalFilter,usePagination);
  const {globalFilter}=state
    return (
      <>
      <Filterform filter={globalFilter} setFilter={setGlobalFilter}/>
      <div className='table-responsive'>
        <table {...getTableProps()} className='table table-bordered'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th>Images</th>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>Status</th>
              <th>action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
              <td> <img src={( row.cells[0].row.original?.images[0]?.image)?`http://localhost:8080/${row.cells[0].row.original?.images[0]?.image}`:defaultimg} className='img-50' alt='' /></td>
              
                {row.cells.map(cell => (
                 <>
                 <td {...cell.getCellProps()}>{cell.render('Cell')}
                <p><strong>{(cell.column.Header == "firstName")?(cell.row.original.videoCategory.category):null}</strong>
                  </p> </td>
                 </> 
                ))}

                <td>
                    {row.cells[0].row.original.isActive === true ? (
                      <button className='btn btn-success'onClick={()=>handleStatus(row.cells[0].row.original._id)}>Active</button>
                    ) : (
                      <button className='btn btn-danger' onClick={()=>handleStatus(row.cells[0].row.original._id)}>Inactive</button>
                    )}
                </td>
                 <td>
                  {/* <button >{console.log(row.cells[0].row.original._id)}</button> */}
                  <Link to={isLiveCourse?`/live-video-course-edit/${row.cells[0].row.original?._id}`:`/video-course-edit/${row.cells[0].row.original?._id}`} className='btn btn-primary btn-sm'>
                    <i class="fas fa-edit"></i>
                  </Link>
                  <Link to={isLiveCourse?`/live-video-course-details/${row.cells[0].row.original._id}`:`/video-course-details/${row.cells[0].row.original._id}`} className='btn btn-info btn-sm'>
                    <i class="fas fa-eye"></i>
                    </Link>
                    <Link to='' onClick={()=>handleDelete(row.cells[0].row.original._id)} className='btn btn-danger btn-sm'>
                    <i class="fas fa-trash"></i>
                    </Link>
                </td>
                {/* <td>
                  {row.cells[0].row.original.images.map}
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='custom-pagination'>
        {/* <button disabled={!canPreviousPage} onClick={() => previousPage()}>Previous Page</button>
        <span>{pageIndex}of{pageCount}</span>
        <button disabled={!canNextPage} onClick={() => nextPage()}>Next Page</button> */}
        
  <ul class="pagination">
    <li disabled={pageIndex === 0} class="page-item"><Link class="page-link" onClick={() => previousPage()} href="#">Previous</Link></li>
    <li class="page-item active" ><Link class="page-link" onClick={()=>(gotoPage(pageIndex))} href="">{(pageIndex)+1}</Link></li>
    {/* <li class="page-item "><Link class="page-link" href="#" onClick={()=>(gotoPage((pageIndex)+1))}>{(pageIndex)+2}</Link></li> */}
    {/* <li class="page-item"><Link class="page-link" href="#" onClick={()=>(gotoPage((pageIndex)+2))}>{(pageIndex)+3}</Link></li> */}
    <li disabled={!canNextPage} class="page-item"><Link class="page-link" onClick={() => nextPage()} href="#">Next</Link></li>
  </ul>
 
      </div>
      </div>
      </>
    );
  }

export default VideoTable;