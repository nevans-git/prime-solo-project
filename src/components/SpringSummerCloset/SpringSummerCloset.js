import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';

// THIS WILL BE IMPORTED INTO THE ClosetItemView!!!
class SpringSummerCloset extends React.Component {
    // NOT SURE IF I NEED STATE HERE


    componentDidMount(){
        console.log('fall closet rendered!');
        this.fetchSpringSummerCloset();
        
    }

    // NOT SURE HOW I SHOULD SETUP THIS DISPATCH
    fetchSpringSummerCloset = (event) => {
        console.log('Spring/Summer closet:', event);
        
        // event.preventDefault();

        this.props.dispatch({ type: 'FETCH_SPRING_SUMMER_CLOSET'}); // GONNA HAVE TO DO ANOTHER BUT SENDING DATA TO THE SERVER IN THE ADD ITEM WHEN YOU GET TO IT
    }

    handleAddItem = () => {
        console.log('add item button was clicked!');

        this.props.history.push('/addItems'); // Add the '/addItem' route in here when its made 
        
    }

    handleBack = () => {
        this.props.history.push('/myCloset'); // Taking user back to the previous page
      }

    render(){
        return(
            <>
            <div>
                <button onClick={this.handleBack}>Back</button>
            </div>

            <h2>Spring/Summer Closet</h2>
            <div>
                <h3>Tops</h3>
                <img src={require('./tops.jpeg')} alt='Tops image'/>
            </div>
            <div>
                <h3>Bottoms</h3>
                <img src={require('./bottoms.jpg')} alt='Bottoms image'/>
            </div>
            <div>
                <h3>Hoodies</h3>
                <img src={require('./hoodies.jpeg')} alt='Hoodies image'/>
            </div>
            <div>
                <h3>Jackets</h3>
                <img src={require('./jackets.jpg')} alt='Jackets image'/>
            </div>
            <div>
                <h3>Shoes</h3>
                <img src={require('./shoes.jpg')} alt='Shoes image'/>
            </div>
            <div>
                <h3>Socks</h3>
                <img src={require('./socks.jpg')} alt='Socks image'/>
            </div>
            <div>
                <h3>Hats</h3>
                <img src={require('./hats.jpg')} alt='Hats image'/>
            </div>
            {/* Delete this break when you start styling */}
            <br />

            <div>
                <button onClick={this.handleAddItem}>Add Item</button>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(withRouter(SpringSummerCloset));