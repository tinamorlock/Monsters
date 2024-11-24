import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Tina Marie',
            company: 'VersionCollab'
        }
    }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.name} |  {this.state.company}
            </p>
              <button onClick={() => {
                  this.setState( (state, props) => {
                      return {
                          name: 'xTina',
                      }
                  }, () => {
                      console.log(this.state);
                  } );
              }}
                  >
                  Change Name
              </button>
          </header>
        </div>
    );
  }
}

export default App;
