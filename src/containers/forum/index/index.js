import React,{Component,Fragment} from 'react';
import ForumList from "../../../components/forumList/forumList";
import ForumItem from '../../../components/forumList/forumItem/forumItem'
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

    render(){
        return (
            <Fragment>
                <ForumList href="/forum" title="General">
                    {this.state.data.filter(s=>s.category === 0 ).map((s,index)=>{
                        return (
                            <ForumItem
                                key={index}
                                title={s.title}
                                subtitle={s.subtitle}
                                threadNum={s.threadNum}
                                href="/"
                            />
                        )
                    })}
                </ForumList>
                <ForumList href="/forum" title="Discussion">
                    {this.state.data.filter(s=>s.category === 1 ).map((s,index)=>{
                        return (
                            <ForumItem
                                key={index}
                                title={s.title}
                                subtitle={s.subtitle}
                                threadNum={s.threadNum}
                                href="/"
                            />
                        )
                    })}
                </ForumList>
                <ForumList href="/forum" title="Activities">
                    {this.state.data.filter(s=>s.category === 2 ).map((s,index)=>{
                        return (
                            <ForumItem
                                key={index}
                                title={s.title}
                                subtitle={s.subtitle}
                                threadNum={s.threadNum}
                                href="/"
                            />
                        )
                    })}
                </ForumList>
            </Fragment>
        )
    }
};

export default ForumIndex

