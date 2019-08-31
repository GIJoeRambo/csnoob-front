import React,{Component,Fragment} from 'react'
import ForumContentList from "./forumContentList/forumContentList";
import ForumContentItem from "./forumContentList/forumContentItem/forumContentItem";
import service from '../../../service/http'
import decoder from '../../../util/Decoder'
import Pagination from "./pagination/pagination";
import BackButton from "../backButton/backButton";
import queryString from 'query-string'
import {Redirect,withRouter} from 'react-router-dom'
class ForumContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            total: 1,
            currentPage: 1,
            title: "",
            subtitle: "",
            PostThreadButtonDisabled: true,
            isRedirect: false
        }

    }
    componentDidMount = () => {
        service.getForumByForumId(queryString.parse(this.props.location.search).id,res=>{
            this.setState({
                title:res.Data.title,
                subtitle:res.Data.subtitle,
                PostThreadButtonDisabled:false
            },()=>{
                this.paginationHandler(this.state.currentPage)
            })
        },err=>{
            this.setState({isRedirect: true})
        });
    };



    paginationHandler = (page) =>{
        service.getThreadsByForumId(queryString.parse(this.props.location.search).id, page,res=>{
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
                forumId: queryString.parse(this.props.location.search).id,
                title: this.state.title
            }
        }
        history.push(path)
    }

    render(){
        if (this.state.isRedirect){
            return <Redirect to="/forum"/>
        }
        return (
            <Fragment>
                <BackButton/>
                <ForumContentList
                    title={this.state.title}
                    description={this.state.subtitle}
                    PostThreadClick={this.PostThreadClickHandler}
                    PostThreadButtonDisabled={this.state.PostThreadButtonDisabled}
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

export default withRouter(ForumContent)
