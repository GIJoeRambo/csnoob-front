import React,{Component} from 'react'
import {Helmet} from 'react-helmet'
import ThreadHeader from "./ThreadHeader/ThreadHeader";
import ThreadContent from "./ThreadContent/ThreadContent";
import ThreadComment from "./ThreadComment/ThreadComment";
import BackButton from "../backButton/backButton";
import queryString from 'query-string'
import {Redirect} from 'react-router-dom'
import service from '../../../service/http'

class Thread extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            content:"",
            isRedirect: false
        }
    }

    componentDidMount = ()=> {
        service.getThreadByThreadId(queryString.parse(this.props.location.search).id,res=>{
            this.setState({
                title:res.Data.title,
                author:res.Data.author,
                content:res.Data.content
            })
        },err=>{
            this.setState({
                isRedirect:true
            })
        })
    }

    render() {
        if (this.state.isRedirect){
            return <Redirect to="/forum"/>
        }
        return (
            <div className="col-large push-top">
                <Helmet>
                    <style>{'body { background-color: #F6F8FF; }'}</style>
                </Helmet>
                <BackButton/>
                <ThreadHeader
                    title={this.state.title}
                    author={this.state.author}
                />
                <div className="post-list">
                    <ThreadContent
                        content={this.state.content}
                    />
                    <ThreadComment/>
                </div>
            </div>
        )
    }
}

export default Thread
