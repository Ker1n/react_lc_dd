import React from "react";
import {NavLink} from 'react-router-dom';


export const LeftPanel = () => {
  return (
      <div className="left-panel">
          <ul>
              <li><NavLink to="/posts">Posts</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
              <li><NavLink to="/docs">Documentation</NavLink></li>
          </ul>
      </div>
  );
};
