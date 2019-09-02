import React,{Component} from 'react'
import FormHoc from '../../../../hoc/FormHoc'
import service from '../../../../service/http'
import Swal from 'sweetalert2';

class ThreadCommentTextPane extends Component{
    handleSubmit = event =>{
        if (!this.ValidatedHandler()){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'The comment cannot be empty.'
            })
            return;
        }
        this.props.onSubmit(event,()=>{
            let regu = "^[ ]+$";
            let re = new RegExp(regu);
            const model = {
                name:this.props.fields.name===""?"Anonymous":re.test(this.props.fields.name)?"Anonymous":this.props.fields.name,
                comment: this.props.fields.comment,
                threadId: this.props.threadId
            }
            service.PostThreadComment(model,res=>{
                Swal.fire({
                    type: 'success',
                    title: res.Data,
                    showConfirmButton: true,
                }).then(result=>{
                    if (result.value){

                    }
                })
            },err=>{
                alert("Something Error")
            })
        })
    }

    ValidatedHandler = () =>{
        if (this.props.fields.comment===""){
            return false
        }
        let regu = "^[ ]+$";
        let re = new RegExp(regu);
        if (re.test(this.props.fields.comment)){
            return false
        }
        return true
    }
    render(){
        return (
            <div>
                <div className="post">
                    <div>
                        Your name:
                        <input
                            value={this.props.fields.name}
                            onChange={this.props.onChange}
                            name="name"
                            placeholder="//optional"/>
                    </div>

                    <textarea
                        value={this.props.fields.comment}
                        onChange={this.props.onChange}
                        name="comment"
                        style={{width:"100%",height:'10em'}}/>
                </div>
                <button className="btn-primary" onClick={this.handleSubmit}>Post</button>
            </div>
        )
    }
}

export default FormHoc({name:"",comment:""})(ThreadCommentTextPane)
