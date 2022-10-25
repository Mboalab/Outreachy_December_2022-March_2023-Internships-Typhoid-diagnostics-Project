import React, {useState} from "react";
import {FaTimesCircle  } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function AddBlog({open, close}) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [blogPost, setBlogPost] = useState("");


  if(!open){return null}

  function handleSubmit(){
    alert("Blogged Successful");
    fetch("https://mboa-rest-api.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        content: blogPost,

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        console.log(data);
      });
  }


  return (
    <div>
    <section className="overlay">
    <div className="layContainer">
          <form onSubmit={handleSubmit}>
            <div className="container2">
            <Link to=''><FaTimesCircle className='closeTab' onClick={close}/></Link>
              <h1>Add Blog</h1>
              <label>
                <b>Title:</b>
              </label>
              <input
                type="text"
                placeholder="Write the blog title here ..."
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
              />
              <label>
               <b>Blog Content:</b>
              </label>
              <textarea type="text"
              className="content"
              placeholder="The blog..."
              name="content"
              value={blogPost}
                onChange={(e)=> setBlogPost(e.target.value)}
              required></textarea>

              <button
                type="submit"
                className="butt1"
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddBlog;
