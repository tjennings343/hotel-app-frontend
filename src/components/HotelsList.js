import React from 'react'


const HotelsList = (props) => {
    
    return(
         <div>
            {props.hotels.map(hotel => <li key={hotel.id}>{hotel.name}</li>)}
         </div>

       
        
    )

}

export default HotelsList

