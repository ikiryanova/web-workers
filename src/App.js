import * as React from 'react';

import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax
import './App.css';

const workerInstance = worker();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  handlerStartWorker = () => {
    workerInstance.postMessage('bar');
    workerInstance.addEventListener('message', (e) => {
      this.setState({
        result: e.data
      });
    });
  };

  handlerAlert = () => {
    alert('Hello!');
  };

  render() {
    return (
      <div className="app">
        <div className="wrap">
          <div>
            <button onClick={this.handlerStartWorker}>Start worker</button>
            <div className="result">Result: {this.state.result}</div>
          </div>
          <button onClick={this.handlerAlert}>Show alert</button>
        </div>
      </div>
    );
  }
}
