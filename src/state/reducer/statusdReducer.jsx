const reducer = (state=0, action) => {
    if(action.type === 'open') {
        return state + action.payload;
    } else if(action.type === 'close') {
        return state + action.payload;
    } else {
        return state;
    }
}

export default reducer