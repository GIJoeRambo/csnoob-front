import React from 'react';


const Pagination = (props)=>{
    return (
        <div className="pagination">
            <button onClick={props.first} className="btn-circle" disabled={props.prevDisabled}><i className="fa fa-angle-left"/><i className="fa fa-angle-left"/></button>
            <button onClick={props.prev} className="btn-circle" disabled={props.prevDisabled}><i className="fa fa-angle-left"/></button>
            {props.currentPage} of {props.totalPage}
            <button onClick={props.next} className="btn-circle" disabled={props.nextDisabled}><i className="fa fa-angle-right"/></button>
            <button onClick={props.last} className="btn-circle" disabled={props.nextDisabled}><i className="fa fa-angle-right"/><i className="fa fa-angle-right"/></button>
        </div>
    )
}

export default Pagination
