export default (state = {number: 0, a: 1, b: 1}, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({number: state.number += action.payload}, state);
        case 'SUBTRACT':
            return Object.assign({number: state.number -= action.payload}, state);
        default:
            return state;
    }
}