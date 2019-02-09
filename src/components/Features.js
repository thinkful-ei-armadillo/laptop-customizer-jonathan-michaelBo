import React from 'react';

class Features extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.state
  }

  render() {

    const selectedClass = this.props.name === this.state.selected[this.props.feature] ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;

    return(
      <div className="feature">
        <div className="feature__name">
          {this.props.feature}
        </div>
        <ul className="feature__list">
          <li className="feature__item">
            <div className={featureClass} onClick={e => this.props.updateFeature( this.props.feature, this.props.allProps[this.props.feature][0] )}>
              {this.props.name[0]}({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(this.props.cost[0])})
            </div>
          </li>
        
          <li className="feature__item">
            <div className={featureClass} onClick={e => this.props.updateFeature( this.props.feature, this.props.allProps[this.props.feature][1] )}>
              {this.props.name[1]} ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(this.props.cost[1])}) 
          </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Features;