import React, {Fragment} from 'react'
import Header from "../../components/header/Header";
const layout = (props) => {
    return (
        <Fragment>
            <Header className='Header'></Header>
            {props.children}
        </Fragment>
    )
}

export default layout
