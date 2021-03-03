const numReducerState = ['a', 'b', 'c']
const numReducer = (state = numReducerState, action) => {
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