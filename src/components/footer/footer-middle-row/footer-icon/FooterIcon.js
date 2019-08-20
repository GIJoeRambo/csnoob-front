import React, { Fragment } from 'react';
import './FooterIcon.css';

const FooterIcon = (props) => {
    return (
        <Fragment>
            {
                props.uniAbbrList.map(
                    (item, index) => {
                        return (
                            <div className='cs_footer_icon'>
                                <img 
                                src={require('../../../../assets/images/uni_icons/' + item )}
                                title={item}
                                ></img>
                            </div>
                        )
                    }
                )
            }
        </Fragment>
    );
}

export default FooterIcon;
// '../../../../assets/images/uni_icons/messay.png'