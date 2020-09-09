import React from 'react';

// THIS WILL BE IMPORTED INTO THE ClosetItemView!!!
class FallCloset extends React.Component {


    handleAddItem = () => {
        console.log('add item button was clicked!');

        this.props.history.push(''); // Add the '/addItem' route in here when its made 
        
    }

    render(){
        return(
            <>
            <h2>Fall Closet</h2>
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

export default FallCloset;