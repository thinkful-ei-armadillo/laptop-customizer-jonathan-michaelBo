import React from 'react';

class Features extends React.Component {
  
  render() {
    console.log(this.props)

    return(
      <div className="feature" key='feature-key'>
        <div className="feature__name">feature-name</div>
        <ul className="feature__list">
          processor
          display
        </ul>
      </div>
    )
  }
}

export default Features;