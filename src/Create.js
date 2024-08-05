import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page to be refreshed when form is submitted

    setIsPending(true);

    const blog = {
      title,
      body,
      author,
    };

    // Create a new blog in the API
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog)
    })
    .then(() => {
      setIsPending(false); // Reset the form state
      navigate('/'); // Redirect to the home page after creating a new blog
    })
  };  

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending ? (<button disabled>Adding Blog...</button>) : (<button>Add Blog</button>) }
      </form>
    </div>
  );
}
 
export default Create;