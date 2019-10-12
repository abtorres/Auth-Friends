import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';

function FriendForm({ errors, touched }) {
    return (
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field className='field' type='text' name='name' placeholder='Name'/>
            </div>
            <div>
                {touched.age && errors.age && <p>{errors.age}</p>}
                <Field className='field' type='number' name='age' placeholder='Age'/>
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field className='field' type='email' name='email' placeholder='Email'/>
            </div>
            <button type='submit'>Submit</button>
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