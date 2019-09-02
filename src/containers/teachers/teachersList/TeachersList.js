import React from "react";
import {
    TablePagination
} from "@material-ui/core";
import './TeachersList.css';

const TeachersList = (props) => {

    const handleChangePage = () => {
        this.setState(() => {
            return (
                {}
            )
        })
    }
    console.log(props)

    return (
        <div className='row TeachersList'>
            <div className="col-12">
                <TablePagination
                    className="cs_tl_pagination"
                    rowsPerPageOptions={[]}
                    component="div"
                    count={props.count}
                    rowsPerPage={props.rowsPerPage}
                    page={props.page}
                    onChangePage={props.changePage}
                />
            </div>
        </div>
    )


}

export default TeachersList;