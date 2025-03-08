export default function reducer(state, action) {
    switch (action.type) {
        case 'add_to_shelf':
            return [action.payload, ...state]
    
        default:
            break;
    }
}