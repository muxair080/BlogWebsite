// import { Input } from '@material-ui/core'
import React   from 'react'
import '../Styles/Writeblog.css';

export default function WriteBlog(props) {
const setData =()=>{
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
   return props.StoreData;

}
    return (
        <div className="container Main-WriteBlog-Div">
            <div className="Writeblogs">
            <div className="WriteBlogHeading"><h1>Type Your Blog Here</h1></div>
            <div className="Title">
                <textarea name="title" className = "txtarea" id="blog-title" cols="10" rows="1" placeholder="Title" onChange = {(event)=> props.GetTitle(event.target.value)}></textarea>
            </div>
            <div className="paragraph">
            <textarea name="title" className = "txtarea" id="blog-content" cols="30" rows="20" placeholder="Content" onChange = {(event)=>props.GetParaghraph(event.target.value)}></textarea>
            </div>
            <button type="button" className="btn m-3 btn-secondary"  onClick= { props.StoreData }>Publish</button>
            </div>
          
        </div>
    )
}
