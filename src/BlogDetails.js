import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isLoading, error}  = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
      })
     .then(() => {
        // Redirect to the home page after deleting a blog
        navigate('/');
      });
  };

  return (
    <div className='blog-details'>
      { isLoading && <div> Loading...</div> }
      { error && <div> Error </div>  }
      { blog && (
        <article> 
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}

      </div>
  )
}

export default BlogDetails;