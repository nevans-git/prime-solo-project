import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// THIS WILL BE IMPORTED INTO THE ClosetItemView!!!
class WinterCloset extends React.Component {
    // NOT SURE IF I NEED STATE HERE


    componentDidMount(){
        console.log('winter closet rendered!');
        this.fetchWinterCloset();
        
    }

    // NOT SURE HOW I SHOULD SETUP THIS DISPATCH
    fetchWinterCloset = (event) => {
        console.log('Winter closet:', event);
        
        // event.preventDefault();

        this.props.dispatch({ type: 'FETCH_WINTER_CLOSET'}); // GONNA HAVE TO DO ANOTHER BUT SENDING DATA TO THE SERVER IN THE ADD ITEM WHEN YOU GET TO IT
    }

    handleAddItem = () => {
        console.log('add item button was clicked!');

        this.props.history.push(''); // Add the '/addItem' route in here when its made 
        
    }

    render(){
        return(
            <>
            <h2>Winter Closet</h2>
            <div>
                <h3>Tops</h3>
                <img src={'tops.jpg'} alt='Tops image'/>
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
                <h3>Socks</h3>
                <img src={'socks.jpg'} alt='Socks image'/>
            </div>
            <div>
                <h3>Hats</h3>
                <img src={'hats.jpg'} alt='Hats image'/>
            </div>
            {/* Delete this break when you start styling */}
            <br />

            <div>
                <button>Add Item</button>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(WinterCloset);