import React from 'react'
import '../Styles/Navbar.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

function Navbar(props) {
  
  const showMenu = ()=>{
     console.log('ShowMenu Function');
    
     let navbar = document.getElementById('menubar');
     if(navbar.style.display === 'block'){
       navbar.style.display =  'none';
     }
     else{
      navbar.style.display =  'block';
     }
  }

  const Search = ()=>{
    let userprofile = document.getElementById('userprofile');
    let inputfield = document.getElementById('searching');
    if(userprofile.style.display === 'none'){
      userprofile.style.display = 'block';
      inputfield.style.display = 'none';
    }
    else{
      userprofile.style.display = 'none';
      inputfield.style.display = 'block';
    }
  
  }

  return (
    
        <nav id="Navbar">
          <div className="Icons">
          <div>
         <a href="https://web.facebook.com/" target = "_blank"><FacebookIcon classname = 'social-media-icon' style={{fontSize : '2rem' , cursor: 'pointer'}} /></a>  

          </div>
         <div>
         <a href="https://www.instagram.com/" target ="_blank"><InstagramIcon classname = 'social-media-icon' lassname = 'icon'  style={{fontSize : '2rem' , cursor: 'pointer'}}/></a>
         </div>
         <div>
          <a href="tel:+923149819182" target="_blank"><SettingsPhoneIcon classname = 'social-media-icon' style={{fontSize : '2rem' , cursor: 'pointer'}}/></a>
         </div>
          
          </div>
          <div id="menubar">
            
          <div className="items" id = "item" >
            <ul>
              <li><Link className = "menuItmes" to = "/">HOME</Link></li>
              <li> <Link className = "menuItmes" to = "/About">ABOUT</Link></li>
              <li><Link className = "menuItmes" to = "/Contactpage">CONTACT</Link></li>
              <li><Link className = "menuItmes" to = "/contactformik">CONTACT US</Link></li>
              <li><Link className = "menuItmes" to = "/Writeblog">WRITE</Link></li>
            </ul>
          </div>
          <div  className="profile-search" id = "profile-searchicon">
            <div id = "profiledata" className="d-flex">
            <div className="profile">
              <Link className = "user-profile" id = "userprofile" to = "/Profilepage">
            <img src="https://source.unsplash.com/user/erondu/1600x900" alt = "Profile"/>
            </Link>
            </div>
            <div id="searching">
            <input type="text"  id= 'search' placeholder = "🔍 Search Here" onChange = {(event)=>props.getSearchValue(event.target.value)}/>
          </div>
            <div className="searchbar">
              <SearchIcon onClick = {Search} id = "Search" style={{fontSize : '4rem' , cursor: 'pointer'}}/>
            </div>
            </div>
          </div>
          </div>
          <div id="menu-icon" onClick = {showMenu}  >
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
          
        </nav>
         
        
        
    );
}

export default Navbar;
