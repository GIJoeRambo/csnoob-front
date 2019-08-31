import React,{Component} from 'react'
import FormHoc from "../../../../hoc/FormHoc";
import service from '../../../../service/http'
import Swal from 'sweetalert2';

class NewThreadForm extends Component{
    handleSubmit = event =>{
        this.props.onSubmit(event,()=>{
            // service.postNewThread()
        })
    };


    ValidatedHandler = () =>{

    }

    CancelHandler = () =>{
        Swal.fire({
            title: "Are you sure to exit?",
            text: 'You have not filled out your form yet.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(result=>{
            if (result.value){
                this.props.goBack()
            }
        })
    };

    render() {
        return (
            <div className="col-full push-top">

                {this.props.children}

                <form>
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
                        <button
                            onClick={this.CancelHandler}
                            type="button" className="btn btn-ghost">Cancel</button>
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
