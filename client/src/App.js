import React from 'react';
import Navbar from "./components/Navbar";
import PostBox from "./components/PostBox";

function App() {
  return (
      <div className="is-ancestor">
          <div className="container">
              <Navbar/>
              <div className="tile is-ancestor is-vertical">
                  <PostBox />
              </div>
          </div>
      </div>
  );
}

export default App;
