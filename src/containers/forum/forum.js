import {
    Switch,
    Route,
} from "react-router-dom";
import React from 'react';
import ForumIndex from "./index";
import ForumLayout from "../../components/layout/forum_layout/forum_layout";
import './forum.css'

const Forum = (props) => {
    return (
        <ForumLayout threadNum='10' postNum="100"
        >
            <Switch>
                <Route
                    path={`${props.match.path}/`}
                    component={ForumIndex}
                />

            </Switch>
        </ForumLayout>
    )
}

export default Forum
