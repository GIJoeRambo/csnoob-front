import React,{Component,Fragment} from 'react'
import ForumContentList from "./forumContentList/forumContentList";
import ForumContentItem from "./forumContentList/forumContentItem/forumContentItem";
import service from '../../../service/http'
import decoder from '../../../util/Decoder'
import Pagination from "./pagination/pagination";
import BackButton from "../backButton/backButton";
import sessionstorage from 'sessionstorage'
class ForumContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            total: 1,
            currentPage: 1
        }

    }
    componentDidMount = () => {
        this.paginationHandler(this.state.currentPage)
    };

    paginationHandler = (page) =>{
        service.getThreadsByForumId(this.props.location.state.forum._id, page,res=>{
            this.setState({
                data:res.Data.details,
                total: res.Data.total,
                currentPage: res.Data.currentPage
            })
        },err=>{
            console.log(err)
        })
    };

    backToTop = () =>{
        document.body.scrollTop = 0;
    }

    PostThreadClickHandler = () =>{
        let {history,match} = this.props;
        let path = {
            pathname: `/forum/${match.params.forumName}/newThread`,
            state: {
                forum:this.props.location.state.forum
            }
        }
        history.push(path)
    }

    render(){
        return (
            <Fragment>
                <BackButton/>
                <ForumContentList
                    title={this.props.location.state.forum.title}
                    description={this.props.location.state.forum.subtitle}
                    PostThreadClick={this.PostThreadClickHandler}
                >
                    {this.state.data.map((s,index)=>{
                        return (
                            <ForumContentItem
                                key={index}
                                title={s.title}
                                postAuthor={s.author}
                                when={decoder(s._id).toDateString()}
                                replyNum="1"
                                LastReplyName="Richard Wang"
                                LastReplyTime="2 hours ago"
                            />
                        )
                    })}
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalPage={this.state.total}
                        prevDisabled={this.state.currentPage===1}
                        nextDisabled={this.state.total===this.state.currentPage}
                        prev={()=>{
                            this.paginationHandler(this.state.currentPage-1)
                            this.backToTop()
                        }}
                        next={()=>{
                            this.paginationHandler(this.state.currentPage+1)
                            this.backToTop()
                        }}
                    />
                </ForumContentList>
            </Fragment>
        )
    }
}

export default ForumContent
