import React, {Fragment} from 'react'
import Header from "../../navigation/header/Header";
import Footer from '../../navigation/footer/Footer'
const MainLayout = (props) => {
    return (
        <Fragment>
            <Header className='Header'></Header>
            {props.children}
            <Footer className='Footer'></Footer>
        </Fragment>
    )
}

export default MainLayout
