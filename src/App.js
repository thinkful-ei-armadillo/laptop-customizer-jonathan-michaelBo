import React, { Component } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Summary from './components/Summary';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    })
  }

  render() {
  
  const total = Object.keys(this.state.selected)
    .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


const keys = Object.keys(this.props.features)

    return (
      <div className="App">
        <Header />      
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {keys.map((key, i) => (
              <Features 
              key={i} 
              feature={key}
              name={this.props.features[key].map(key => key.name)}
              cost={this.props.features[key].map(key => key.cost)}
              updateFeature={this.updateFeature}
              state={this.state}
              allProps={this.props.features}
              />
            )             
            )}
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {keys.map((key, i) => (
            <Summary
              key={i}
              feature={key}
              {...this.state.selected[key]}
              title={this.state.selected}              
            />
            )
            )}
            <div className="summary__total">
              <div className="summary__total__label">Your Price:  </div>
              <div className="summary__total__value">  
                {total}           
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
