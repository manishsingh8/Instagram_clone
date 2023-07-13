import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className='profile'>
       {/* profile frame */}
       <div className='profile-frame '>
        <div className='profile-pic common'>
          {/* profile pic */}
          <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic"/>

        </div>
        {/* profile data */}
           <div className='profile-data common'>
               <h4>Lucy</h4>
               <div className='profile-info'>
                <p>40 Post</p>
                <p>30 Followers</p>
                <p>50 Following</p>
               </div>
           </div>
       </div>
       <hr style={{width:"90%",
       margin:"auto",
       opacity:".8" ,
       margin:"25px auto"}}/>
       {/* gallery */}
       <div className='gallery'>
           <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic" />
           <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic" />
           <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic" />
           <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic" />
           <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic" />
           <img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="profile pic" />
       </div>
    </div>
  )
}  

export default Profile;

