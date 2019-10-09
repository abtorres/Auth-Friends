import React from 'react';
import { Card } from 'semantic-ui-react';

const Friend = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header><h1>{props.friend.name}</h1></Card.Header>
                <Card.Description><p>Age: {props.friend.age}</p><p>Email: {props.friend.email}</p></Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Friend;