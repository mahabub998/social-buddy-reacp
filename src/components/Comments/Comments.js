import React from 'react';

const Comments = (props) => {
    const {id,name,email,body} = props.comment;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>        </div>
    );
};

export default Comments;