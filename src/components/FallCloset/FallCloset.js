import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// THIS WILL BE IMPORTED INTO THE ClosetItemView!!!
class FallCloset extends React.Component {
    // NOT SURE IF I NEED STATE HERE


    componentDidMount(){
        console.log('fall closet rendered!');
        this.fetchFallCloset();
        
    }

    // NOT SURE HOW I SHOULD SETUP THIS DISPATCH
    fetchFallCloset = (event) => {
        console.log('Fall closet:', event);
        
        // event.preventDefault();

        this.props.dispatch({ type: 'FETCH_FALL_CLOSET'}); // GONNA HAVE TO DO ANOTHER BUT SENDING DATA TO THE SERVER IN THE ADD ITEM WHEN YOU GET TO IT
    }

    handleAddItem = () => {
        console.log('add item button was clicked!');

        this.props.history.push(''); // Add the '/addItem' route in here when its made ... and add it to add item button below
        
    }

    render(){
        return(
            <>
            <h2>Fall Closet</h2>
            <div>
                <h3>Tops</h3>
                <img src={'tops.jpeg'} alt='Tops image'/>
            </div>
            <div>
                <h3>Bottoms</h3>
                <img src={'bottoms.jpg'} alt='Bottoms image'/>
            </div>
            <div>
                <h3>Hoodies</h3>
                <img src={'hoodies.jpeg'} alt='Hoodies image'/>
            </div>
            <div>
                <h3>Jackets</h3>
                <img src={'jackets.jpg'} alt='Jackets image'/>
            </div>
            <div>
                <h3>Shoes</h3>
                <img src={'shoes.jpg'} alt='Shoes image'/>
            </div>
            <div>
                <h3>Hats</h3>
                <img src={'hats.jpg'} alt='Hats image'/>
            </div>
            {/* Take out break when you start styling */}
            <br/> 

            <div>
                <button>Add Item</button>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(FallCloset);