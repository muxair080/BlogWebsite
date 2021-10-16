import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
// Css Code of the component is in DisplayBlog.css file;
const Aboutme = () => {
    return (
        <div className="aboutme setting">
        <div>
         <hr/>
         <h3 className = "h3-aboutme">About Me</h3>
         <hr/>
         <div className = "My-Image">
             <img src="https://source.unsplash.com/1600x900/?nature,water" alt="Error" />
         </div>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero eaque, consectetur repellendus beatae facere. Excepturi, ea enim .</p>
         </div>
         <hr/>
         <h3>Categories</h3>
         <hr/>
         <div className = "Categories">
             <div className="name">
                 <div>Web-Development</div>
                 <div>Machine Learning</div>
                 <div>Android-Devolpment</div>
             </div>
             <div className="name">
                 <div>Wordpress Development</div>
                 <div>IOS Development</div>
                 <div>Data science</div>
             </div>
         </div>
         <hr/>
         <div className="Icons">
         <a href="https://web.facebook.com/" target = "_blank"><FacebookIcon style={{fontSize : '2rem' , cursor: 'pointer'}} /></a>  
         <a href="https://www.instagram.com/" target ="_blank"><InstagramIcon style={{fontSize : '2rem' , cursor: 'pointer'}}/></a>
          <a href="tel:+923149819182" target="_blank"><SettingsPhoneIcon style={{fontSize : '2rem' , cursor: 'pointer'}}/></a>
          </div>
     </div>
    )
}

export default Aboutme
