import React,{Component} from 'react'
import NewThreadForm from "../../../components/UI/form/newThreadForm/newThreadForm";
class NewThread extends Component{
    render() {
        return (
            <NewThreadForm
                forumId={this.props.location.state.forum._id}
            >
                <h1>Create new thread in <i>{this.props.location.state.forum.title}</i></h1>
            </NewThreadForm>
        )
    }
}

export default NewThread
