export default function hotelReducer(state = {hotels: []}, action) {
    
    switch (action.type){
        case 'FETCH_HOTELS':
            return{
                hotels: action.hotels
            }

        case 'ADD_HOTEL':
            return{
                ...state,
                hotels: [...state.hotels, action.newHotel]
            }
            
            default:
                return state
    }
}