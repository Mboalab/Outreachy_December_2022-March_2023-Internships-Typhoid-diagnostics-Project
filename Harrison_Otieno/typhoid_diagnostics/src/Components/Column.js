import React,{useState} from "react";
import AddBlog from "./AddBlog";


function ColumnNav() {
  const[reg, setReg]=useState(false)
  return (
    <div className="ColNav">
    <button className="butt" onClick={()=> setReg(true)}>Add Blog</button>
    <AddBlog open={reg} close={()=> setReg(false)}/>
    </div>
  );
}

export default ColumnNav;
