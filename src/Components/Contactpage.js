import React from 'react'
import  '../Styles/Contact.css';
import Aboutme from './Aboutme';


const Validation = {
    name : false,
    email : false
}
const Contactpage = () => {
    const ValidationFName = (name)=>{
        let regex =  /^[a-zA-Z]([a-zA-Z0-9]){3,20}/;
        if(regex.test(name)){
            Validation.name = true;
        }
        else{
            Validation.name = false;
            let msg = document.getElementById('Fname-error');
            msg.innerHTML = 'Name is Not Valid';
            msg.style.display = 'block';
         let clickagain = document.getElementById('FName');
         console.log(clickagain);
         clickagain.style.borderColor = 'red';
         clickagain.addEventListener('click' , ()=>{
             msg.style.display = 'none';
             clickagain.style.borderColor = 'black';
         })
        }
   }
    const ValidationLName = (name)=>{
        let regex =  /^[a-zA-Z]([a-zA-Z0-9]){3,20}/;
        if(regex.test(name)){
            Validation.name = true;
        }
        else{
            Validation.name = false;
            let msg = document.getElementById('Lname-error');
            msg.innerHTML = 'Name is Not Valid';
            msg.style.display = 'block';
         let clickagain = document.getElementById('LName');
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
         let clickagain = document.getElementById('UserEmail');
         console.log(clickagain);
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
    if(Validation.name === true && Validation.email === true){
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

        <div className = "ContactPage">
            <form action="">
            <div className="input-field">
                <label htmlFor="FName">First Name</label>
                <input type="text" id = "FName" name = "Fname" placeholder = "First Name" onBlur = {(event) => ValidationFName(event.target.value)} />
                <div id = "Fname-error" className = "error-msg"></div>
            </div>
            <div className="input-field">
                <label htmlFor="LName">Last Name</label>
                <input type="text" id = "LName" name = "Lname" placeholder = "Last Name" onBlur = {(event) => ValidationLName(event.target.value)} />
                <div id = "Lname-error" className = "error-msg"></div>
            </div>
            <div className="input-field">
                <label htmlFor="UserEmail">Email</label>
                <input type="email" id = "UserEmail" name = "UserEmail" placeholder = "Email Address"onBlur = {(event) => ValidationEmail(event.target.value)} />
                <div id = "email-error" className = "error-msg"></div>
            </div>
            <div className="Textarea-field input-field">
                <label htmlFor="Message">Message</label>
                <textarea name="msg" id="Message" cols="30" rows="10" placeholder = "Type Message Here"></textarea>
            </div>
            <div className="btns">
                <input type="submit"className = "btn btn-primary" name="submit" id="submit-btn"/>
                <input type="reset" className = "btn btn-primary" name="reset" id="reset-btn"/>
            </div>
            </form>
            <div>
                <Aboutme/>
            </div>
          
        </div>
    )
}

export default Contactpage
