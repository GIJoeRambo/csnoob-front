import React from 'react'

const NotFoundLayout = (props) => {
    return (
        <div className="align-items-center">
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="col-12 text-center">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFoundLayout
