let i = 200000;
while (i >= 1) {
  postMessage('Web Worker Counter: ' + i); // отправляем сообщение браузеру
  i--;
}
