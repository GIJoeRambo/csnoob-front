import React,{Fragment} from 'react';
import ForumList from "../../../components/forumList/forumList";
import ForumItem from '../../../components/forumList/forumItem/forumItem'
const ForumIndex = () =>{
    return (
        <Fragment>
            <ForumList href="/" title="information technology">
                <ForumItem
                    title="Announcements"
                    subtitle="abcdefg hijklmn"
                    threadNum="1"
                    href="/"
                />
                <ForumItem
                    title="Announcements"
                    subtitle="abcdefg hijklmn"
                    threadNum="1"
                    href="/"
                />
            </ForumList>
            <ForumList href="/" title="information technology">
                <ForumItem
                    title="Announcements"
                    subtitle="abcdefg hijklmn"
                    threadNum="1"
                    href="/"
                />
                <ForumItem
                    title="Announcements"
                    subtitle="abcdefg hijklmn"
                    threadNum="1"
                    href="/"
                />
            </ForumList>
        </Fragment>
    )
};

export default ForumIndex
