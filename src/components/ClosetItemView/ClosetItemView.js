import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import FallCloset from '../FallCloset/FallCloset';
import WinterCloset from '../WinterCloset/WinterCloset';
import SpringSummerCloset from '../SpringSummerCloset/SpringSummerCloset';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class ClosetItemView extends React.Component {

  handleBack = () => {
    this.props.history.push('/myCloset'); // Taking user back to the previous page
  }

  render(){
    return(
    <>
    <div>
      <button onClick={this.handleBack}>Back</button>
    </div>
    <div className="container">
      <FallCloset />
      <WinterCloset />
      <SpringSummerCloset />
    <div>
      <p>This page will be hidden and filled with items once I get the images in MyCloset setup </p>
    </div>
    <LogOutButton className="log-in" /> 
    </div>
    </>
    )
  }
}





// const ClosetItemView = () => (
//   <div className="container">
//     <div>
//       <p>This page will be hidden and filled with items once I get the images in MyCloset setup </p>
//     </div>
//     <LogOutButton className="log-in" /> 
//   </div>
// );

export default ClosetItemView;
