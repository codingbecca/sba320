export default function reducer(state, action) {
    switch (action.type) {
        case 'add_to_shelf':
            return [action.payload, ...state];
        case 'remove_from_shelf':
            return state.filter(book => book.volumeInfo.industryIdentifiers[0]['identifier'] !== action.payload.volumeInfo.industryIdentifiers[0]['identifier'])
    
        default:
            break;
    }
}