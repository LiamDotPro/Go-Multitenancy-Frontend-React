export const add = () => dispatch => {
    dispatch({
        type: 'ADD',
        payload: 1
    })
};

export const subtract = () => dispatch => {
    dispatch({
        type: 'SUBTRACT',
        payload: 1
    })
};