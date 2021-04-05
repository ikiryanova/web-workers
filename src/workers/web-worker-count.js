export default function WebWorkerCount() {
  let i = 1;
  while (i <= 20000) {
    postMessage(i);
    i++;
  }
}
