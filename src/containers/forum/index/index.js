import React,{Component,Fragment} from 'react';
import ForumList from "./forumList/forumList";
import ForumItem from './forumList/forumItem/forumItem'
import service from '../../../service/http'
class ForumIndex extends Component{
    state = {
        data: []
    }

    componentDidMount = () => {
        service.getForum(res=>{
            this.setState({data:res.Data})
        },err=>{
            console.log(err);
        })
    }

    clickHandler = (forum) =>{
        let {history} = this.props;
        let path = {
            pathname: "/forum/" + forum.title.split(" ").join(""),
            state:{
                forum: forum
            }
        }
        history.push(path)
    }

    render(){
        return (
            <Fragment>
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

