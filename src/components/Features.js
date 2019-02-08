import React from 'react';

class Features extends React.Component {
  
  render() {
    console.log(this.props)
    
    /* const optionKeys = this.props.options.map((item, i) => {
      
      return item.name
    }) */
   /*  console.log(optionKeys) */

   
    
    return(
      <div className="feature">
        
        <div className="feature__name">
          {this.props.feature}
        </div>
        <ul className="feature__list">
          
        </ul>
      </div>
    )
  }
}

export default Features;