import {
    Switch,
    Route,
} from "react-router-dom";
import React from 'react';
import ForumContent from './content/content'
import ForumIndex from "./index/index";
import ForumLayout from "../../components/layout/forum_layout/forum_layout";
import './forum.css'

const Forum = (props) => {
    return (
        <ForumLayout threadNum='10' postNum="100"
        >
            <Switch>
                <Route
                    path={`${props.match.path}/content`}
                    component={ForumContent}
                />
                <Route
                    path={`${props.match.path}/`}
                    component={ForumIndex}
                />

            </Switch>
        </ForumLayout>
    )
}

export default Forum
