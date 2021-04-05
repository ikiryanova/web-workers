import * as React from 'react';
import WebWorkerEnabler from './workers/web-worker-enabler';
import WebWorker from './workers/web-worker';
import WebWorkerCount from './workers/web-worker-count';

import './App.css';

const workerInstance = new WebWorkerEnabler(WebWorker);
let worker;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  componentDidMount() {
    workerInstance.addEventListener('message', (e) => {
      console.log('Received from main:', e.data);
    });
    workerInstance.postMessage('bar');
  }

  handlerStartWorker = () => {
    if (!worker) {
      worker = new WebWorkerEnabler(WebWorkerCount);
    }
    worker.addEventListener('message', (e) => {
      this.setState({
        result: e.data
      });
    });
  };

  handlerStopWorker = () => {
    if (worker) {
      worker.terminate();
      worker = undefined;
    }
  };

  handlerAlert = () => {
    alert('Hello!');
  }

  render() {
    return (
      <div className="app">
        <div className="wrap">
          <div>
            <button onClick={this.handlerStartWorker}>Start worker</button>
            <div className="result">Result: {this.state.result}</div>
          </div>
          <button onClick={this.handlerStopWorker}>Stop worker</button>
          <button onClick={this.handlerAlert}>Show alert</button>
        </div>
      </div>
    );
  }
}
