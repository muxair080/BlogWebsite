import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import WriteBlog from './Components/WriteBlog';
import About from './Components/About';
import { createContext ,  useState ,useEffect } from 'react';
import DisplayBlogs from './Components/DisplayBlogs';
import Profilepage from './Components/Profilepage';
import Contactpage from './Components/Contactpage';
import PostPublished from './Components/PostPublished';
import Contactwithformik from './Components/Contactwithformik';



let Blogs = createContext();
let Inputvalue = createContext();

function App() {
  const [Title, setTitle] = useState('')
  const [Paragraph, setParagraph] = useState('');
  const [GetDataFromLocalStorage, setGetDataFromLocalStorage] = useState([]);
  const [count, setcount] = useState(0);
  const [Inputval, setInputval] = useState('');
  let blogdata = []

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('blogs'));
    data === null?setGetDataFromLocalStorage([]):
    setGetDataFromLocalStorage(data);
    
  }, [count])
 
  const GetTitle = (title)=>{
      setTitle(title)
  }
  const GetParaghraph = (para)=>{
      setParagraph(para)
  }
  
  const StoreData = ()=>{
      let getdata =  JSON.parse(localStorage.getItem('blogs'));
      if(getdata!==null){
        blogdata = getdata;
      }
      setcount(count+1);
      blogdata.push({ Title ,  Paragraph});
      localStorage.setItem('blogs', JSON.stringify(blogdata));
      let alldataget = JSON.parse(localStorage.getItem('blogs'));
     console.log(alldataget);
     document.getElementById('alert-msg').style.display = 'block';
     setTimeout(() => {
       document.getElementById('alert-msg').style.display = 'none';
     }, 3000);
  }  

const DeleteData = (item)=>{
  let data = JSON.parse(localStorage.getItem('blogs'));
  console.log("Data : ",data);

  data = data.filter((element , index)=>{
    return item !== index
  })
    localStorage.setItem('blogs',JSON.stringify(data));
    setcount(count+1);
}

const GetSearchValue = async (value)=>{
  setInputval(value);
  setTimeout(() => {
    document.getElementById('search').value = ''
  }, 10000);
}
 return(

 <>
  <Router>
  <Navbar getSearchValue = {GetSearchValue}/>
  <PostPublished/>
  <Switch>
           <Route path="/About">
                 <About/>
          </Route>
          <Route path="/Writeblog">
            <WriteBlog GetTitle = {GetTitle}  GetParaghraph = {GetParaghraph} StoreData = {StoreData} />
          </Route>
          <Route path = "/Profilepage">
            <Profilepage/>
          </Route>
          <Route path = "/Contactpage">
            <Contactpage/>
          </Route>
          <Route path = "/contactformik">
            <div className="contactformik">
            <Contactwithformik/>
            </div>
          </Route>
          <Route path="/">
            <Home />
            <Blogs.Provider value = {GetDataFromLocalStorage }>
              <Inputvalue.Provider value = {Inputval}>
                <DisplayBlogs DeleteItem = {DeleteData} />
              </Inputvalue.Provider>
            </Blogs.Provider>
          </Route> 
        </Switch>
        <Footer/>
  </Router>
 </>
);
}
export default App;
export {Blogs , Inputvalue};