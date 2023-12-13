import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server (replace with actual API endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  // Function to generate a random image URL from the Unsplash Source API
  const getRandomImageUrl = () => {
    const width = 300;
    const height = 200;
    const randomImageId = Math.floor(Math.random() * 1000) + 1;
    return `https://source.unsplash.com/${width}x${height}/?random=${randomImageId}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Website</h1>
        <div className="post-container">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img
                src={getRandomImageUrl()}
                alt={`Image ${post.id}`}
                className="post-image"
              />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>Author: User {post.userId}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
