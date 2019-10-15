import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import './AddFriendForm.css';

function FriendForm({ errors, touched }) {
    return (
        <Form className='add-friend-form'>
            <div className='field'>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field className='field' type='text' name='name' placeholder='Name'/>
            </div>
            <div className='field'>
                {touched.age && errors.age && <p>{errors.age}</p>}
                <Field className='field' type='number' name='age' placeholder='Age'/>
            </div>
            <div className='field'>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field className='field' type='email' name='email' placeholder='Email'/>
            </div>
            <div className='field'>
                <button type='submit'>Submit</button>
            </div>
        </Form>
    )
}

const AddFriendForm = withFormik({
    mapPropsToValues({ name, age, email, token }) {
        return {
            name: name || '',
            age: age || '',
            email: email || '',
            token: token
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required(),
        age: Yup.number()
            .required(),
        email: Yup.string()
            .email()
            .required()
    }),

    handleSubmit(values, { props }) {
        console.log(props)
        const newFriend = {name: values.name, age: parseInt(values.age), email: values.email};

        axiosWithAuth().post('/friends', newFriend)
        .then(res => {
            console.log(res)
            props.setFriends(res.data)
        })
    }
})(FriendForm)

export default AddFriendForm;