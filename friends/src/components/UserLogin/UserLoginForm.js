import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './UserLoginForm.css'

function UserLoginForm({ errors, touched}) {

    return (
        <Form className='login-form'>
            <h1>Auth-Friends</h1>
            <p>Log In</p>
            <div className='field-div'>
                {touched.userName && errors.userName && <p>{errors.userName}</p>}
                <Field className='login-field' type='text' name='userName' placeholder='User Name'/>
            </div>
            <div className='field-div'>
                {touched.userPassword && errors.userPassword && <p>{errors.userPassword}</p>}
                <Field className='login-field' type='password' name='userPassword' placeholder='Password'/>
            </div>
            <button type='submit'>Submit</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ userName, userPassword }) {
        return {
            userName: userName || "",
            userPassword: userPassword || ""
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string()
                .required('User Name is Required'),
        userPassword: Yup.string()
                .required('Password is Required')
    }),

    handleSubmit(values, {props}) {
        axios.post('http://localhost:5000/api/login', {
            username: values.userName,
            password: values.userPassword
        })
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends')
        })
    }
})(UserLoginForm)

export default FormikLoginForm;