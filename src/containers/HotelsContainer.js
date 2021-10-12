import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchHotels} from '../actions/hotelActions'
import HotelForm from '../components/HotelForm'
import HotelsList from '../components/HotelsList'


class HotelsContainer extends Component {

    componentDidMount(){
        this.props.fetchHotels()
    }

    render(){
        return(
            <div>
                <HotelForm /><br/><br/>
                <HotelsList hotels={this.props.hotels} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        hotels: state.hotels
    }
}

export default connect(mapStateToProps, {fetchHotels})(HotelsContainer)
