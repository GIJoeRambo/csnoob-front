const ThreadCommentIsPostedReducer = (state=false,action) =>{
    switch (action.type) {
        case "CHANGE":
            const newState = !state;
            return newState;
        default:
            return state;
    }
};

export default ThreadCommentIsPostedReducer
