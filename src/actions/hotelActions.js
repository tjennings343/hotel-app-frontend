export const fetchHotels = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/hotels')
        .then(response => response.json())
        .then(hotels => dispatch({
            type: 'FETCH_HOTELS', hotels
        }))
    }
    
}

export const addHotel = (hotel) => {

    return (dispatch) => {
           
        let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(hotel)
        };

        fetch('http://localhost:3001/hotels', configObj)
        .then(resp => resp.json())
        .then(newHotel => dispatch({type: 'ADD_HOTEL', newHotel}))
    }


}

