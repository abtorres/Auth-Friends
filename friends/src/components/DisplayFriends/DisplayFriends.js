import React from 'react';
import Friend from '../Friend/Friend';
import shortid from 'shortid';

const DisplayFriends = (props) => {
    console.log(props)
    
    return (
        <div className='friends-list'>
            {props.friends.map(friend => <Friend key={shortid.generate()} friend={friend}/>)}
        </div>
    )
}

export default DisplayFriends;