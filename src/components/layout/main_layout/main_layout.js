import React, {Fragment} from 'react'
import Header from "../../navigation/header/Header";
import Footer from '../../navigation/footer/Footer'
import './main_layout.css';
const MainLayout = (props) => {
    return (
        <Fragment>
            <Header className='Header'></Header>
            <div className="main_layout">
                {props.children}
            </div>
            <Footer className='Footer'></Footer>
        </Fragment>
    )
}

export default MainLayout
