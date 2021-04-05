let i = 1;
while (i <= 200000) {
  postMessage('Web Worker Counter: ' + i); // отправляем сообщение браузеру
  i++;
}
