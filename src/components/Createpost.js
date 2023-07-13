import React from 'react';
import './createpost.css';


const Createpost = () => {

    const loadfile =(event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
        }
    }
  return (
    <div className='createPost'>
       {/* header */}
       <div className="post-header">
        <h4 style={{margin:"3px auto"}}>Create new Post</h4>
        <button id="post-btn">Share</button>
       </div>
       {/*image preview  */}
       <div className="main">
        <img id="output" src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png" />
        <input type="file" accept="image/*" onChange={(event)=>{loadfile(event)}}/>
       </div>
        {/* details */}
         <div className="details">
            <div className="card-header">
                <div className="card-pic">
                    <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="" />
                </div>
                <h5>Lucy</h5>
            </div>
            <textarea type="text" placeholder='Write a caption'></textarea>
         </div>
    </div>
  )
}

export default Createpost;
