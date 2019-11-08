import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import *as Yup from 'yup';
import './UserForm.css';
import { removeProperties } from '@babel/types';

const UserForm = ({handleReset, touched, errors}) => {

    

    
    return (
    <Form className='UserForm' >
        <h3 className="welcome">Welcome to a form!</h3>
        <Field 
        type="text"
         name="name" 
         placeholder="Name"
         />
         {touched.name && errors.name && <p>{errors.name}</p>}
        <Field 
        type="email" 
        name="email" 
        placeholder="email"
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field 
        type="password" 
        name="password" 
        placeholder="Password" 
        />
        <div className="terms-and-conditions">
            <h3 className="terms-header">Terms and Conditions</h3>
            <h5 className="term">Don't be a jerk.</h5>
            <h5 className="term">Have a good time.</h5>
            <h4>Agree to terms?</h4>
            {touched.terms && errors.terms && <p>{errors.terms}</p>}
            <Field className='terms' name='terms' type="checkbox" placeholder='Agree to Terms'/>
        </div>
        
        <input type="submit"/>
    </Form>
    );
}

const FormikForm = withFormik({

    
    mapPropsToValues({name, email, password,terms}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('You need a Name!'),
        email: Yup.string()
        .email()
        .required('We need Your email!'),
        password: Yup.string().required(),
        terms: Yup.boolean().oneOf([true], "You must agree to the terms.")

    }),
    handleSubmit(values,{ props,tools,setSubmitting})  {
        console.log(values)
        const newUser = {
            ...values
        }
        console.log(newUser)
        props.addUser(newUser)
        console.log(props.users)
  
        axios
        .post('https://reqres.in/api/users/',values)
        .then(res => {
            console.log(res)
            
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    
})(UserForm)
console.log(FormikForm)


export default FormikForm;
