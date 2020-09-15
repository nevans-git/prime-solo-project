import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';

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

        this.props.history.push('/addItems'); // Add the '/addItem' route in here when its made ... and add it to add item button below
        
    }

    handleBack = () => {
        this.props.history.push('/myCloset'); // Taking user back to the previous page
      }

    render(){
        return(
            <>
            {this.props.store.fall.map((fallItems) => {
                return(
                    <div key={fallItems.type}>
                        <h2>{fallItems.type}</h2>
                        <p>{fallItems.item_condition}</p>
                        <p>{fallItems.item_description}</p>
                        <p>{fallItems.item_value}</p>
                        {/* <button >Delete</button> */}
                    </div>
                    

                )
            })}
            <div>
                <button onClick={this.handleBack}>Back</button>
            </div>
            
            <h2>Fall Closet</h2>
            
            <p>{JSON.stringify(this.props.store.fall)}</p>

            {/* <div>
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
            </div> */}
            {/* Take out break when you start styling */}
            <br/> 

            <div>
                <button onClick={this.handleAddItem}>Add Item</button>
            </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(withRouter(FallCloset));