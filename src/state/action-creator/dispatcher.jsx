export const openDoor = (time) => {
    return(dispatch) => {
        dispatch({
            type: 'open',
            payload: time
        })
    }
}

export const closeDoor = (time) => {
    return(dispatch) => {
        dispatch({
            type: 'close',
            payload: time
        })
    }
}