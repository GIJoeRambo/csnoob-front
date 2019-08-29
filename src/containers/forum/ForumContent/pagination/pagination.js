import React from 'react';


const Pagination = (props)=>{
    return (
        <div className="pagination">
            <button onClick={props.prev} className="btn-circle" disabled={props.prevDisabled}><i className="fa fa-angle-left"></i></button>
            {props.currentPage} of {props.totalPage}
            <button onClick={props.next} className="btn-circle" disabled={props.nextDisabled}><i className="fa fa-angle-right"></i></button>
        </div>
    )
}

export default Pagination
