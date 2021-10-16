import React  from 'react'
import '../Styles/Profilepage.css';
import Aboutme from './Aboutme';
import '../Styles/DisplayBlogs.css';


const Validation = {
    name : false,
    email : false,
    password : false
}
const Profilepage = () => {

 
        const ValidationName = (name)=>{
            let regex =  /^[a-zA-Z]([a-zA-Z0-9]){3,20}/;
            if(regex.test(name)){
                Validation.name = true;
            }
            else{
                Validation.name = false;
                let msg = document.getElementById('name-error');
                msg.innerHTML = 'Name is Not Valid';
                msg.style.display = 'block';
             let clickagain = document.getElementById('Name');
             console.log(clickagain);
             clickagain.style.borderColor = 'red';
             clickagain.addEventListener('click' , ()=>{
                 msg.style.display = 'none';
                 clickagain.style.borderColor = 'black';
             })
            }
       }
        const ValidationEmail = (email)=>{
            let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
            if(regex.test(email)){
                Validation.email = true;
            }
            else{
                Validation.email = false;

                let msg = document.getElementById('email-error');
                msg.innerHTML = 'Email is Not Valid';
                msg.style.display = 'block';
             let clickagain = document.getElementById('Email');
             console.log(clickagain);
             clickagain.style.borderColor = 'red';
             clickagain.addEventListener('click' , ()=>{
                 msg.style.display = 'none';
                 clickagain.style.borderColor = 'black';
             })
            }
       }
        const ValidationPassword = (password)=>{
            let regex = /^([a-zA-Z0-9@#$!%^&*\(\)\\\.,>?>/]){8,20}/
            if(regex.test(password)){
                Validation.password = true;
            }
            else{
                Validation.password = false;

                let msg = document.getElementById('password-error');
                msg.innerHTML = 'Password must be at least 8 chars';
                msg.style.display = 'block';
             let clickagain = document.getElementById('Password');
             clickagain.style.borderColor = 'red';
             clickagain.addEventListener('click' , ()=>{
                 msg.style.display = 'none';
                 clickagain.style.borderColor = 'black';
             })
            }
       }
    
    const Submittion = ()=>{
        let submit = document.getElementById('subbmission-msg');
        submit.style.display = 'block';
        if(Validation.name === true && Validation.email === true && Validation.password === true){
            submit.innerHTML = 'Login Successfully ';
            submit.className ='bg-success';
             document.getElementById('Email').value = '';
             document.getElementById('Name').value = '';
             document.getElementById('Password').value = '';
            
        }


        else{
            submit.innerHTML = 'Please Fill Correct Data';
            submit.className ='bg-danger';
        }
            setTimeout(() => {
                submit.style.display = 'none';
            }, 3000);
            
            
    }
    
 

    return (
        <div className = "Account">
            <form action="" className ="userProfile">
                <div id="subbmission-msg" ></div>
                <div className="input-tags">
                    <label htmlFor="Name">UserName</label>
                    <input type="text" id="Name" placeholder = "Enter User Name" onBlur = {(event ) => ValidationName(event.target.value)}/>
                    <div id = "name-error" className = "error-msg"></div>
                </div>
                <div className="input-tags">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" placeholder = "Enter Email" onBlur = {(event ) => ValidationEmail(event.target.value)}/>
                    <div id = "email-error" className = "error-msg"></div>
                 
                </div>
                <div className="input-tags">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" placeholder = "Enter Password" onBlur = {(event ) => ValidationPassword(event.target.value)}/>
                    <div id = "password-error" className = "error-msg"></div>
                </div>
                <div className="btn btn-primary my-2" onClick = {Submittion}>Login</div>
            </form>
                <Aboutme/>
        </div>
    )
}

export default Profilepage
