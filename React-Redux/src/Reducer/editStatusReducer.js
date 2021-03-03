const editInitialState = false
const editReducer = (state = editInitialState, action) => {
    switch (action.type) {
        case "Change_edit_status":
            return !state
        default:
            return state;
    }
};

export default editReducer;