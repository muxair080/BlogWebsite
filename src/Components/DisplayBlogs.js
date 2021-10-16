import React,{useContext , useState} from 'react'
import {Blogs , Inputvalue} from '../App';
import '../Styles/DisplayBlogs.css';
import img from '../Assessts/showcaseimg.jpg';
import BlogRead from './ReadBlog';
import Aboutme from './Aboutme';

const DisplayBlogs = (props) => {
    const blogs  = useContext(Blogs);
    const inputval  = useContext(Inputvalue);
    const [state, setstate] = useState(true)
    const [Item, setItem] = useState(null)

   const ReadBlog = ( value, element)=>{
       setstate(value);
        setItem(element);
   } 
    return (
          <div className = "Container">
       { state === true &&  <div className="blogs">
               {

                    blogs.map((element , index)=> {
                        if(inputval === '' || element.Title.toLowerCase().includes(inputval.toLowerCase())){
                      return    <div className="blog" key = {index}>
                            <div className="image">
                                <img src={img} alt="loading..." />
                            </div>
                            <div>
                            <h1>{element.Title}</h1>
                            <div>
                                {
                                    
                                 element.Paragraph.length > 200 &&  <p> {element.Paragraph.substring(0 , 200)+'...'}</p> || element.Paragraph.length <= 200  && <p>{element.Paragraph}</p> ||  element.Paragraph.length === 0 && <p>No Discription</p>       
                    }
                                </div>
                            </div>
                            <div className="read-more-btn">
                                <button className= "btn btn-primary" onClick = {()=> ReadBlog(false, element)}>Read-More</button>
                                <button className= "btn btn-primary" onClick = {()=> props.DeleteItem(index)}>Delete</button>
                            </div>     
                        </div>
                    }})
               } 
              
            </div>   || (state === false && <BlogRead value = {Item} ChangeMode = {ReadBlog}/> 
            )}
            <Aboutme/>
        </div> 
    )
}

export default DisplayBlogs
