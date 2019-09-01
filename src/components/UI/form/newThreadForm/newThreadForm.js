import React,{Component} from 'react'
import FormHoc from "../../../../hoc/FormHoc";
import service from '../../../../service/http'
import Swal from 'sweetalert2';
class NewThreadForm extends Component{
    state={
        buttonDisabled: false
    }
    handleSubmit = event =>{
        if (!this.ValidatedHandler()){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'The title and content cannot be empty.'
            })
        }else{
            let regu = "^[ ]+$";
            let re = new RegExp(regu);
            this.props.onSubmit(event,()=>{
                const model = {
                    author:this.props.fields.author===""?"Anonymous":re.test(this.props.fields.author)?"Anonymous":this.props.fields.author,
                    title: this.props.fields.title,
                    content: this.props.fields.content,
                    forumId: this.props.forumId
                }
                this.setState({buttonDisabled:true})
                service.postNewThread(model,res=>{
                    Swal.fire({
                        type: 'success',
                        title: res.Data,
                        showConfirmButton: true,
                    }).then(result=>{
                        if (result.value){
                            this.props.goBack()
                        }
                    })
                },err=>{
                    alert("Something Error")
                    this.setState({buttonDisabled:false})
                })
            })
        }
    };


    ValidatedHandler = () =>{
        if (this.props.fields.title==="" ||this.props.fields.content===""){
            return false;
        }
        let regu = "^[ ]+$";
        let re = new RegExp(regu);
        if (re.test(this.props.fields.title)||re.test(this.props.fields.content)){
            return false
        }
        return true
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
                    <div className="row">
                        <div className="col-5">
                            <div className="form-group">
                                <label htmlFor="thread_title">Title:</label>
                                <input
                                    type="text" id="thread_title" className="form-input"
                                    value={this.props.fields.title}
                                    onChange={this.props.onChange}
                                    name="title"/>
                            </div>
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-5">
                            <div className="form-group">
                                <label htmlFor="thread_title">Author:</label>
                                <input
                                    type="text" id="thread_title" className="form-input"
                                    placeholder="//optional"
                                    value={this.props.fields.author}
                                    onChange={this.props.onChange}
                                    name="author"/>
                            </div>
                        </div>
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
                            disabled={this.state.buttonDisabled}
                            type="button" className="btn btn-ghost">Cancel</button>
                        <button
                            onClick={this.handleSubmit}
                            disabled={this.state.buttonDisabled}
                            className="btn btn-blue" type="button" name="Publish">Publish</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormHoc({title:"",content:"",author:""})(NewThreadForm)
