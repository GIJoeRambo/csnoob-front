import React from 'react';
import {withRouter} from 'react-router-dom'
const BackButton = (props) => {
    return (
        <div className="col-full push-top">
            <button className="btn-circle-default btn-primary" onClick={props.click}><i className="fa fa-angle-left"></i>Back</button>
    </div>
    )
}

export default withRouter(BackButton)
