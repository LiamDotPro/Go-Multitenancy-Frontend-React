export const Increment = () => (dispatch) => {
    dispatch({
        type: 'INCREMENT',
        payload: 1
    })
};