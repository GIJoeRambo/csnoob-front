import React, {Component} from 'react';

const SchoolHoc = (fileds) => {
    return WrappedComponent => {
        return class extends Component{
            render(){
                return (
                    <WrappedComponent
                        {...this.props}
                        school={{...fileds}}
                    />
                )
            }
        }
    }
}

export default SchoolHoc
