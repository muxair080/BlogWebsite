

import React from 'react'
import '../Styles/Contactformik.css';
import { Formik, Form ,Field ,ErrorMessage, FastField} from 'formik';
import *  as  Yup from 'yup'; 
import TextError from './TextError';

const  initialValues = {
    FName: '',
    LName: '',
    Email: '',
    Message: '',
    Address: ''
}

const  onSubmit = (values , submitingprops) => {
    console.log('Props : ',submitingprops);
    console.log("Form Values : ",values);
    submitingprops.resetForm();
}
const validationSchema = Yup.object({
    FName : Yup.string().required('Required').min(2,'To Short').max(30, 'To Long').matches(/^[a-zA-Z]([a-zA-Z0-9])/,'Enter Valid Name'),
    LName : Yup.string().required('Required').min(2,'To Short').max(30, 'To Long').matches(/^[a-zA-Z]([a-zA-Z0-9])/,'Enter Valid Name'),
    Email : Yup.string().email('Invalid Email').required('Required'),
    Address: Yup.string().required('Required')
})
const LoginForm = () => {

    return (
        <Formik 
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
         >
         <Form>
            <div className = 'input-field'>
                     <label htmlFor="FirstName">First Name</label>
                     <Field type="text" id="FirstName" name="FName" placeholder="Enter Full Name"/>
                     <ErrorMessage name = 'FName' component={TextError}/>
            </div>
            <div className = 'input-field'>
                     <label htmlFor="LastName">Last Name</label>
                     <Field type="text" id="LastName" name="LName" placeholder="Enter Full Name" />
                     <ErrorMessage name = 'LName' component={TextError}/>
            </div>

            <div className = 'input-field'>
                     <label htmlFor="Email">Email</label>
                     <FastField type="email" id="Email" name="Email" placeholder="Enter Email" />
                     <ErrorMessage name = 'Email' component={TextError}/>
            </div>
        
            <div className="input-field">
                <label htmlFor="Message">Message</label>
                <FastField as='textarea' name='Message' id='Message' placeholder = 'Enter Your Message Here' />
            </div>
            <div className="input-field">
            <label htmlFor="Address">Address</label>
            <Field type = 'text' name = 'Address' id='Address' placeholder = 'Enter Your Name'/>
            </div>
         
 
          
            <div className = 'btns'>
               <button className = 'btn' type = "submit">Submit</button>
               <button className = 'btn'  type = "reset">Reset</button>
            </div>
          
        </Form>
    
    
       </Formik>
    )
}

export default LoginForm