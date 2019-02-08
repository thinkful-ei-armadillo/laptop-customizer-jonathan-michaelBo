import React from 'react';

class Features extends React.Component {
  
  render() {
    console.log(this.props)
    console.log(this.props.name)
    console.log(this.props.feature)
    return(
      <div className="feature">
        
        <div className="feature__name">
          {this.props.feature}
        </div>
        <ul className="feature__list">
          <li onClick={e => this.props.updateFeature(this.props.feature, this.props.name)}>
            
            {this.props.name[0]} ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(this.props.cost[0])})
        </li>
          <li onClick={e => this.props.updateFeature(this.props.feature, this.props.name)}>
            {this.props.name[1]} ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(this.props.cost[1])})
        </li>
          
        
        </ul>
      </div>
    )
  }
}

export default Features;