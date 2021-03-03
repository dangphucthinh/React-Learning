const editReducerState = false
const editReducer =  (state = editReducerState , action) => {
    switch (action.type) {
        case "Change_edit_status":
            return !state
        default:
            return state;
    }
};

export default editReducer;