export default (state = {test: 1}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                result: action.payload
            };
        default:
            return state;
    }
}