import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addHotel} from '../actions/hotelActions'

class HotelForm extends Component {

        state = {
            name: '',
            city: '',
            state: '',
            price: '',
            phone_number: ''
        }
    
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.addHotel(this.state)
        this.setState({
            name: '',
            city: '',
            state: '',
            price: '',
            phone_number: ''
        })
        
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} name='name' onChange={this.handleOnChange} /><br/>
                    <label>City: </label>
                    <input type='text' value={this.state.city} name='city' onChange={this.handleOnChange} /><br/>
                    <label>State: </label>
                    <input type='text' value={this.state.state} name='state' onChange={this.handleOnChange} /><br/>
                    <label>Price: </label>
                    <input type='text' value={this.state.price} name='price' onChange={this.handleOnChange} /><br/>
                    <label>Phone Number: </label>
                    <input type='text' value={this.state.phone_number} name='phone_number' onChange={this.handleOnChange} /><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addHotel})(HotelForm)


