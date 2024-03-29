import React,{Component,Fragment} from 'react';
import ForumList from "./forumList/forumList";
import ForumItem from './forumList/forumItem/forumItem'
import service from '../../../service/http'
import sessionStorage from 'sessionstorage'
class ForumIndex extends Component{
    state = {
        data: []
    }

    componentDidMount = () => {
        if (!sessionStorage.getItem("forums")){
            service.getForum(res=>{
                this.setState({data:res.Data},()=>{
                    sessionStorage.setItem("forums",JSON.stringify(res.Data))
                })
            },err=>{
                console.log(err);
                alert("Server Error")
            })
        }else{
            this.setState({data:JSON.parse(sessionStorage.getItem("forums"))})
        }
    }

    clickHandler = (forum) =>{
        let {history} = this.props;
        let path = {
                pathname: "/forum/" + forum.title,
                search: `id=${forum._id}&page=1`
            }
        ;
        history.push(path)
    };

    render(){
        return (
            <Fragment>
                <div className="col-full">
                    <div className="forum-header">
                        <div className="forum-details">
                            <h1>Forums</h1>
                            <p className="text-lead">Find your favourite forum</p>
                        </div>
                    </div>
                </div>
                <ForumList title="General">
                    {this.state.data.filter(s=>s.category === 0 ).map((s,index)=>{
                        return (
                            <ForumItem
                                key={index}
                                title={s.title}
                                subtitle={s.subtitle}
                                threadNum={s.threadNum}
                                click={()=> this.clickHandler(s)}
                            />
                        )
                    })}
                </ForumList>
                <ForumList title="Discussion">
                    {this.state.data.filter(s=>s.category === 1 ).map((s,index)=>{
                        return (
                            <ForumItem
                                key={index}
                                title={s.title}
                                subtitle={s.subtitle}
                                threadNum={s.threadNum}
                                click={()=> this.clickHandler(s)}
                            />
                        )
                    })}
                </ForumList>
                <ForumList title="Activities">
                    {this.state.data.filter(s=>s.category === 2 ).map((s,index)=>{
                        return (
                            <ForumItem
                                key={index}
                                title={s.title}
                                subtitle={s.subtitle}
                                threadNum={s.threadNum}
                                click={()=> this.clickHandler(s)}
                            />
                        )
                    })}
                </ForumList>
            </Fragment>
        )
    }
};

export default ForumIndex

