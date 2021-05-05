import React from 'react';

const Comments = (props) => {
    const {name,email} = props.comment;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>        </div>
    );
};

export default Comments;