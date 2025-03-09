export default function reducer(state, action) {
    switch (action.type) {
        case 'add_to_shelf':
            return [action.payload, ...state];
        case 'remove_from_shelf':
            return state.filter(book => book.id !== action.payload.id)
    
        default:
            break;
    }
}