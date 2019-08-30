import React, { Component } from 'react';
import { Search } from 'styled-icons/boxicons-regular';
import './TeachersSearch.css';

class TeachersSearch extends Component {

    state = {
        value: ''
    }

    render() {
        return (
            <div className='TeachersSearch'>
                <div className='row'>
                    <div className='col-12 cs_ts_title'>
                        Search your lecturer here
                    </div>
                    <div className='col-12'>
                        <input
                            type="text"
                            className='col-12 cs_ts_input'
                            value={this.state.value}
                            onChange={this.changeInput}
                        />
                        <Search size='30' className='cs_ts_icon_search' onClick={this.search} />
                    </div>
                </div>
            </div>
        )
    }

    search = (event) => {
        let searchStr = this.state.value;
        this.props.getSpecificTeacher(searchStr);
    }

    changeInput = (event) => {
        const newChar = event.target.value;
        this.setState({ value: newChar })
    }
}

export default TeachersSearch;
