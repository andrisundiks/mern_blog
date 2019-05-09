import React from 'react';
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";

function App() {
  return (
      <div className="is-ancestor">
          <div className="container">
              <Navbar/>
              <div className="tile is-ancestor is-vertical">
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
              </div>
          </div>
      </div>
  );
}

export default App;
