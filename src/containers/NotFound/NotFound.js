import React from 'react'
import './NotFound.css'
import WireBiting from '../../components/UI/background/WireBiting/WireBiting'

const NotFound = () => {
    return (
        <div className="align-items-center">
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="col-12 text-center">
                                <WireBiting/>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <a href="/" className="link_404">Go to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound
