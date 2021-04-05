export default function WebWorker() {
  onmessage = e => { 
    console.log('Received from worker: ', e.data);        
  };
  setInterval(() => {
    postMessage('Response');
  }, 2000);
}
