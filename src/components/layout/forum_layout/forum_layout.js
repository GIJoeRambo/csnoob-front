import React from 'react';

const ForumLayout = (props) =>{
    return (
        <div className="container">
            <div className="col-full">
                {props.children}
            </div>
        </div>
    )
}

export default ForumLayout
