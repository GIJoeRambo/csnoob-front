import {
    Switch,
    Route,
} from "react-router-dom";
import React from 'react';
import ForumContent from './ForumContent/ForumContent'
import ForumIndex from "./index/index";
import ForumLayout from "../../components/layout/forum_layout/forum_layout";
// import ForumNewThread from './newThread/newThread'
import './forum.css'
import BackButton from "./backButton/backButton";

const Forum = (props) => {
    return (
        <ForumLayout threadNum='10' postNum="100"
        >
            <Switch>
                <Route
                    path={`${props.match.path}/:forumName`}
                    component={ForumContent}
                />
                {/*<Route*/}
                {/*    path={`${props.match.path}/newThread`}*/}
                {/*    component={ForumNewThread}*/}
                {/*/>*/}
                <Route
                    path={`${props.match.path}/`}
                    component={ForumIndex}
                />
            </Switch>
        </ForumLayout>
    )
}

export default Forum
