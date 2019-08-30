import React,{Component} from 'react'
import FormHoc from "../../../../hoc/FormHoc";
import service from '../../../../service/http'

class NewThreadForm extends Component{
    handleSubmit = event =>{
        this.props.onSubmit(event,()=>{
            // service.postNewThread()
        })
    }
    render() {
        return (
            <div className="col-full push-top">

                {this.props.children}

                <form action="">
                    <div className="form-group">
                        <label htmlFor="thread_title">Title:</label>
                        <input
                            type="text" id="thread_title" className="form-input"
                            value={this.props.fields.title}
                            onChange={this.props.onChange}
                            name="title"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="thread_content">Content:</label>
                        <textarea id="thread_content"
                                  className="form-input"
                                  name="content"
                                  value={this.props.fields.content}
                                  onChange={this.props.onChange}
                                  rows="8" cols="140"/>
                    </div>

                    <div className="btn-group">
                        <button type="button" className="btn btn-ghost">Cancel</button>
                        <button
                            onClick={this.handleSubmit}
                            className="btn btn-blue" type="submit" name="Publish">Publish</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormHoc({title:"",content:""})(NewThreadForm)
