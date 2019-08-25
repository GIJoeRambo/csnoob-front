import {
    Switch,
    Route,
} from "react-router-dom";
import React from 'react';
import ForumIndex from "./index";
import './forum.css'
import ForumLayout from "../../components/layout/forum_layout/forum_layout";

const Forum = (props) => {
    return (
        <ForumLayout>
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
