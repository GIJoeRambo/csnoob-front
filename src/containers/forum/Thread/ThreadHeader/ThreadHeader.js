import React,{Fragment} from 'react';

const ThreadHeader = (props) =>{
    return(
        <Fragment>
            <h1>{props.title}</h1>
            <p>
                By <span className="link-unstyled">{props.author}</span>, {props.PostDate}.
                <span style={{float:'right', marginTop: '2px'}} className="hide-mobile text-faded text-small">{props.replies} replies</span>
            </p>
        </Fragment>
    )
}

export default ThreadHeader
