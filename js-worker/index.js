const startWorker1 = document.querySelector('#startWorker1');
const startWorker2 = document.querySelector('#startWorker2');
const startWorker3 = document.querySelector('#startWorker3');

const stopWorker1 = document.querySelector('#stopWorker1');
const stopWorker2 = document.querySelector('#stopWorker2');
const stopWorker3 = document.querySelector('#stopWorker3');

const mainThread = document.querySelector('#mainThread');

startWorker1.addEventListener('click', () => {
  let worker1;
  worker1 = testWorker(worker1, 'worker1', 'workerOutput1');
  stopWorker1.addEventListener('click', () => terminateWorker(worker1));
});

startWorker2.addEventListener('click', () => {
  let worker2;
  worker2 = testWorker(worker2, 'worker2', 'workerOutput2');
  stopWorker2.addEventListener('click', () => terminateWorker(worker2));
});

startWorker3.addEventListener('click', () => {
  let worker3;
  worker3 = testWorker(worker3, 'worker3', 'workerOutput3');
  stopWorker3.addEventListener('click', () => terminateWorker(worker3));
});

mainThread.addEventListener('click', testMainThread);

function testWorker(worker, file, output) {
  if (typeof Worker !== 'undefined') {
    if (typeof worker == 'undefined') {
      worker = new Worker(`${file}.js`);
    }
    // получаем сообщение от worker
    worker.addEventListener('message', (event) => {
      document.getElementById(output).innerHTML = event.data;
    });
    return worker;
  } else {
    document.getElementById(output).innerHTML = 'Web Workers are not supported in your browser';
  }
}

function terminateWorker(worker) {
  worker.terminate();
  worker = undefined;
}

function testMainThread() {
  document.getElementById('mainThreadOutput').innerHTML = '';
  for (var i = 1; i <= 2000000; i++) {
    document.getElementById('mainThreadOutput').innerHTML = 'Main Thread Counter: ' + i;
  }
}
