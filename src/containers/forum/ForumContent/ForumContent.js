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
            title: "",
            subtitle: "",
            PostThreadButtonDisabled: true,
            isRedirect: false
        }

    }
    componentDidMount = () => {
        this.backToTop()
        service.getForumByForumId(queryString.parse(this.props.location.search).id,res=>{
            this.setState({
                title:res.Data.title,
                subtitle:res.Data.subtitle,
                PostThreadButtonDisabled:false
            },()=>{
                this.getThreadsHandler(queryString.parse(this.props.location.search).id,queryString.parse(this.props.location.search).page)
            })
        },err=>{
            this.setState({isRedirect: true})
        });
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.getThreadsHandler(queryString.parse(nextProps.location.search).id,queryString.parse(nextProps.location.search).page)
    }


    getThreadsHandler = (forumId,page) =>{
        service.getThreadsByForumId(forumId, page,res=>{
            this.setState({
                data:res.Data.details,
                total: res.Data.total,
                currentPage: res.Data.currentPage
            })
        },err=>{
            console.log(err)
        })
    };

    paginationHandler = (i)=>{
        let {history,match} = this.props;
        let path = {
            pathname: `/forum/${match.params.forumName}`,
            search: `id=${queryString.parse(this.props.location.search).id}&page=${i}`
        }
        history.push(path)
    }

    backToTop = () =>{
        window.scrollTo(0, 0);
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

    ClickThreadHandler = (threadItem) =>{
        let {history,match} = this.props;
        let path ={
            pathname: `/forum/${match.params.forumName}/${threadItem.title}`,
            search: `id=${threadItem._id}`
        }
        history.push(path)
    }

    render(){
        if (this.state.isRedirect){
            return <Redirect to="/forum"/>
        }
        return (
            <Fragment>
                <BackButton
                    click={()=>this.props.history.push({pathname:"/forum"})}
                />
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
                                titleClick={()=>this.ClickThreadHandler(s)}
                            />
                        )
                    })}
                    <Pagination
                        currentPage={queryString.parse(this.props.location.search).page}
                        totalPage={this.state.total}
                        prevDisabled={Number(queryString.parse(this.props.location.search).page)===1}
                        nextDisabled={this.state.total===Number(queryString.parse(this.props.location.search).page)}
                        prev={()=>{
                            this.paginationHandler(Number(queryString.parse(this.props.location.search).page)-1)
                        }}
                        next={()=>{
                            this.paginationHandler(Number(queryString.parse(this.props.location.search).page)+1)
                        }}
                    />
                </ForumContentList>
            </Fragment>
        )
    }
}

export default withRouter(ForumContent)
