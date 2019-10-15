import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';
import shortid from 'shortid';
import AddFriendForm from '../AddFriendForm/AddFriendForm';
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import { Redirect } from 'react-router-dom';
import './DisplayFriends.css'

const DisplayFriends = (props) => {
    console.log(props)
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(() => {
                return (<Redirect to='/'/>)
            })
    }, [])
    return (
        <div className='friends-list'>
            <div>
                <h1>Friends</h1>
                <AddFriendForm setFriends={setFriends}/>
            </div>
            <div className='friends'>
                {friends.map(friend => <Friend key={shortid.generate()} friend={friend}/>)}
            </div>
        </div>
    )
}

export default DisplayFriends;