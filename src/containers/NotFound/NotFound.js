import React from 'react'
import './NotFound.css'
import WireBiting from '../../components/UI/background/WireBiting/WireBiting'
import NotFoundLayout from '../../components/layout/404_layout/404_layout'

const NotFound = () => {
    return (
        <NotFoundLayout>
            <WireBiting/>

            <div className="contant_box_404">
                <h3 className="h2">
                    Look like you're lost
                </h3>
                <p>the page you are looking for not avaible!</p>
                <a href="/" className="link_404">Go to Home</a>
            </div>
        </NotFoundLayout>
    )
}

export default NotFound
