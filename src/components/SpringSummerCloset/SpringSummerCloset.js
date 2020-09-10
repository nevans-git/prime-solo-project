import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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

        this.props.history.push(''); // Add the '/addItem' route in here when its made 
        
    }

    render(){
        return(
            <>
            <h2>Spring/Summer Closet</h2>
            <div>
                <h3>Tops</h3>
                <img />
            </div>
            <div>
                <h3>Bottoms</h3>
                <img />
            </div>
            <div>
                <h3>Hoodies</h3>
                <img />
            </div>
            <div>
                <h3>Jackets</h3>
                <img />
            </div>
            <div>
                <h3>Shoes</h3>
                <img />
            </div>
            <div>
                <h3>Hats</h3>
                <img />
            </div>

            <div>
                <button>Add Item</button>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(SpringSummerCloset);