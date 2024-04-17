import React from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function MyCkeditor({data,seteditor,disabled=false}) {
  return (
    <>
    <div className='App'>
    <label htmlFor="">Video Details</label>

      <CKEditor disabled={disabled}
        editor={ ClassicEditor }
        // data="<p>Hello from CKEditor 5!</p>"
        // onReady={ ( editor ) => {
        //   console.log( "CKEditor5 React Component is ready to use!", editor );
        // } }
        data={data}

        onChange={ ( event, editor ) => {
          const data = editor.getData();
          // console.log( data );
          seteditor((curval)=>{
            return {...curval,details:data}
          })
          // console.log( event.name );
        } }
      />
    </div>
    </>
  )
}

export default MyCkeditor




// let a=e.target.files[0]
// console.log(e.target.files[0])
//  console.log(e.target.files)
//  // e.target.files
//  let arr=[]
//  for (let i of e.target.files){
//    console.log(i);
//    //  arr=[];
//    arr.push(i)
//  }
// console.log(arr)