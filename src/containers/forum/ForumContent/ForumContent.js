import React,{Component} from 'react'
import ForumContentList from "./forumContentList/forumContentList";
import ForumContentItem from "./forumContentList/forumContentItem/forumContentItem";
import service from '../../../service/http'
import decoder from '../../../util/Decoder'
class ForumContent extends Component{
    state = {
        data: []
    }
    componentDidMount = () => {
        service.getThreadsByForumId(this.props.location.state.forum._id,res=>{
            this.setState({data:res.Data})
        },err=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.props.location.state)
        return (
            <ForumContentList
                title={this.props.location.state.forum.title}
                description={this.props.location.state.forum.subtitle}
            >
                {this.state.data.map((s,index)=>{
                    return (
                        <ForumContentItem
                            key={index}
                            title={s.title}
                            postAuthor="Oliver Deng"
                            when={decoder(s._id).toDateString()}
                            replyNum="1"
                            LastReplyName="Richard Wang"
                            LastReplyTime="2 hours ago"
                        />
                    )
                })}
            </ForumContentList>
        )
    }
}

export default ForumContent
