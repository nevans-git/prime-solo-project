import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// THIS WILL BE IMPORTED INTO THE ClosetItemView!!!
class MiscCloset extends React.Component {
    // NOT SURE IF I NEED STATE HERE


    componentDidMount(){
        console.log('fall closet rendered!');
        this.fetchFallCloset();
        
    }

    // NOT SURE HOW I SHOULD SETUP THIS DISPATCH
    fetchFallCloset = (event) => {
        console.log('Miscellaneous closet:', event);
        
        // event.preventDefault();

        this.props.dispatch({ type: 'FETCH_MISC_CLOSET'}); // GONNA HAVE TO DO ANOTHER BUT SENDING DATA TO THE SERVER IN THE ADD ITEM WHEN YOU GET TO IT
    }

    handleAddItem = () => {
        console.log('add item button was clicked!');

        this.props.history.push(''); // Add the '/addItem' route in here when its made 
        
    }

    render(){
        return(
            <>
            <h2>Miscellaneous Closet</h2>
            <div>
                <h3>Jewlery</h3>
                <img src={'jewelery.jpeg'} alt='Jewelery image'/>
            </div>
            <div>
                <h3>Bags</h3>
                <img src={'bags.jpg'} alt='Bags image'/>
            </div>
            <div>
                <h3>Luggage</h3>
                <img src={'luggage.jpg'} alt='Luggage image'/>
            </div>
            {/* Delete the break when you start styling */}
            <br />
            
            <div>
                <button>Add Item</button>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(MiscCloset);