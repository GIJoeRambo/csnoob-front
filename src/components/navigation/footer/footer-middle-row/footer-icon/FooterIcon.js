import React, { Fragment } from 'react';
import './FooterIcon.css';

const FooterIcon = (props) => {
    return (
        <Fragment>
            {
                props.uniAbbrList.map(
                    (item, index) => {
                        return (
                            <div key={index} className='cs_footer_icon'>
                                <img
                                    alt="circle"
                                    src={require('../../../../../assets/images/uni_icons/' + item )}
                                    title={item}
                                />
                            </div>
                        )
                    }
                )
            }
        </Fragment>
    );
}

export default FooterIcon;
