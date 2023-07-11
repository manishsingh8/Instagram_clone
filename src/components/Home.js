import React from "react";
import './home.css';

const Home = () => {
  return (
    <div className="container">
    <div className="home">
      {/* card */}
      <div className="card">
        {/* card header */}
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80"
              alt="profile pic"
            />
          </div>
            <h5>Lucy</h5>
        </div>

        {/* card post image */}
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1685535822512-cf2157508ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        {/* card content */}
        <div className="card-content">
          <span className="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>This is amazing</p>
        </div>

        {/* add comment */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type="text" placeholder="Add a comment..."/>
          <button className="comment" >Post</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
