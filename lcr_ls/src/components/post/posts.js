import React from "react";

import Post from "../post/post";

const Posts = () => {

    const [count, setCount] = React.useState(10);
    
    
    React.useEffect(() => {
        const interval = setInterval(() => setCount(count +1 ), 1000)
    
        return () => {   
            clearInterval(interval) 
        }
    });

   
    return (
    <>
    
      <Post
        author={"Kirill Markov"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis fugiat deserunt quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis fugiat deserunt quisquam"
        }
        likesCount={count}
      />
    </>
  );
};

export default Posts;
