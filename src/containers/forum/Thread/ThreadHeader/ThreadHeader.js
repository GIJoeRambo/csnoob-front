import React,{Fragment} from 'react';

const ThreadHeader = (props) =>{
    return(
        <Fragment>
            <h1>{props.title}</h1>
            <p>
                By <span className="link-unstyled">{props.author}</span>, 2 hours ago.
                <span style={{float:'right', marginTop: '2px'}} className="hide-mobile text-faded text-small">3 replies</span>
            </p>
        </Fragment>
    )
}

export default ThreadHeader
