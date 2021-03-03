const numInitialState = ['a', 'b', 'c']
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "Change_add_status":
            return [
                ...state,
                action.newItem
            ]
        case "Change_delete_status":
            return [
                state.filter((value, i) => i !== action.index)
            ]
        default:
            return state;
    }
};

export default numReducer;