
import React from 'react'

import '../Styles/DisplayBlogs.css';
import img from '../Assessts/showcaseimg.jpg';
import '../Styles/ReadBlog.css';

const ReadBlog = (props) => {
    return (
     
       <div className="Item">
            <div className="image">
                <img src={img} alt="loading..." />
            </div>
            <div>
            <h1>{props.value.Title}</h1>
             <p>{props.value.Paragraph}</p>  
            </div>
            <div className="read-more-btn">
                <button className = "btn btn-primary" onClick = {() => props.ChangeMode(true , null)}>Go-Back</button>
            </div>

            </div>
                
    )
}

export default ReadBlog


