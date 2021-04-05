onmessage = (e) => {
  console.log('Received from worker: ', e.data);
};
let i = 0;
setInterval(() => {
  postMessage(i++);
}, 1000);
