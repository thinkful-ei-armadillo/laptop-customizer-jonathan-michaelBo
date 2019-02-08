import React from 'react';

class Summary extends React.Component {
/* { this.state.selected[key].name } */
/* {
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  .format(total)
} */

  render() {
    console.log(this.props)
    return (
      <div className="summary__option">
        <div className="summary__option__label">{this.props.feature}</div>
        <div className="summary__option__value">{this.props.name}</div>
        <div className="summary__option__cost">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(this.props.cost)}</div>
      </div>
    )
  }

}

export default Summary;
