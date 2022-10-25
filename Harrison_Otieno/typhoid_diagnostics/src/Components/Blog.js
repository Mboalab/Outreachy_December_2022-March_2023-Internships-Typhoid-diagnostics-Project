import React,{useState, useEffect} from 'react'
// import {FaThumbsUp, FaThumbsDown, FaCommentAlt } from "react-icons/fa";


function Blog() {
  const [details, setDetails] = useState ([]);


    useEffect(() => {
      fetch("https://mboa-rest-api.herokuapp.com/blogs")
      .then((res)=>res.json())
      .then((data)=>{
        setDetails(data)
        console.log(data)
      })
    }, [])

    const blogData = details;


  return (
    <>
    <section className='Bidders'>
    <div>
    {blogData.map((detail)=>(
      <div className='blogInfo' key={detail.content}>
      <div className='post'>
       <h1>{detail.name}</h1>
       <p>{detail.content}</p>



      </div>

      <div className='reaction'>


      </div>
      </div>

    ))}

    </div>

    </section>

    </>
  )
}

export default Blog;
