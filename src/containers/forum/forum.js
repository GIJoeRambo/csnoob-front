import {
    Switch,
    Route,
} from "react-router-dom";
import React,{PureComponent} from 'react';
import ForumContent from './ForumContent/ForumContent'
import ForumIndex from "./index/index";
import ForumLayout from "../../components/layout/forum_layout/forum_layout";
import ForumNewThread from './newThread/newThread'
import Thread from "./Thread/Thread";
import service from '../../service/http'
import './forum.css'

class Forum extends PureComponent{
    state={
        threadNum:0,
        postNum:0
    }

    componentDidMount = () => {
        this.getThreadNumAndPostNumHandler()
    }

    getThreadNumAndPostNumHandler = () =>{
        service.getThreadNumAndPostNum(res=>{
            this.setState({
                threadNum: res.Data.threadNum,
                postNum: res.Data.postNum
            })
        },err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <ForumLayout threadNum={this.state.threadNum} postNum={this.state.postNum}
            >
                <Switch>
                    <Route
                        path={`${this.props.match.path}/:forumName/newThread`}
                        component={ForumNewThread}
                    />
                    <Route
                        path={`${this.props.match.path}/:forumName/:ThreadName`}
                        component={Thread}
                    />
                    <Route
                        path={`${this.props.match.path}/:forumName`}
                        component={ForumContent}
                    />
                    <Route
                        path={`${this.props.match.path}/`}
                        component={ForumIndex}
                    />
                </Switch>
            </ForumLayout>
        )
    }
}

export default Forum
