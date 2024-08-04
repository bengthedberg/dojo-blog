import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    // Fetach all blogs 
    fetch('http://localhost:8000/blogs')
      // Get the response object and get the data as json
      .then(res => { 
          return res.json();
        })
        // Get the data from the json response and set the state
        .then((data) => {
          console.log(data);
          setBlogs(data);
        }) 
  },[]); // [] will only run once on the initial render

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;