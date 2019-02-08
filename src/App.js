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
    });
  }

  render() {
    
    // summary of price and features
    const summary = Object.keys(this.state.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[key].cost) }
            </div>
        </div>)

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


    const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return (
                <li key={index} className="feature__item">
                  <div className={featureClass}

                    onClick={e => this.updateFeature(key, item)}>
                    {item.name}
                    ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                      .format(item.cost)})
                </div>
                </li>
              )
                
                
                
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
         });      
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
              /* options={options[i]} */
              name={this.props.features[key].map(key => key.name)}
              cost={this.props.features[key].map(key => key.cost)}
              updateFeature={this.updateFeature}
              />
            )
              
            )}
           {/* <Features features={this.props.features}  />  */}
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {keys.map((key, i) => (
            <Summary
              key={i}
              feature={key}
              {...this.state.selected[key]}
              
            />
            )
            )}
            <div className="summary__total">
              <div className="summary__total__label">Your Price:{total} </div>
              <div className="summary__total__value">
              
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
