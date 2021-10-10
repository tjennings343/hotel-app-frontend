import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchHotels} from '../actions/hotelActions'


class Hotels extends Component {

    render(){
        return(
            <div>
                Hotel Component
            </div>
        )
    }

}

export default connect(null, {fetchHotels})(Hotels)
