import React,{Component} from 'react'
import NewThreadForm from "../../../components/UI/form/newThreadForm/newThreadForm";
import {Redirect,withRouter} from 'react-router-dom'
class NewThread extends Component{
    constructor(props) {
        super(props);
        this.state ={
            forumId: "",
            title: "",
            isRedirect: false,
        }
    }

    componentDidMount =()=> {
        if (this.props.location.state){
            const {forumId,title} = this.props.location.state;
            this.setState({forumId:forumId,title:title})
        }else{
            this.setState({isRedirect:true})
        }
    }

    render() {
        if (this.state.isRedirect){
            return <Redirect to='/forum'/>
        }
        return (
            <NewThreadForm
                forumId={this.state.forumId}
                goBack={()=>this.props.history.goBack()}
            >
                <h1>Create new thread in <i>{this.state.title}</i></h1>
            </NewThreadForm>
        )
    }
}

export default withRouter(NewThread)
