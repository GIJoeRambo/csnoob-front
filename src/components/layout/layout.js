import React, {Fragment} from 'react'
import Header from "../../components/header/Header";
import Footer from '../footer/Footer'
const layout = (props) => {
    return (
        <Fragment>
            <Header className='Header'></Header>
            {props.children}
            <Footer className='Footer'></Footer>
        </Fragment>
    )
}

export default layout
