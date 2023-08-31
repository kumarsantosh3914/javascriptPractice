function blockingLoop() {
  for (let i = 0; i < 1000000000; i++) {
    // whenever there is multiple of 500000000, print it
    if (i % 500000000 == 0) console.log(i);
  }
}

let x = 0;
setTimeout(function f() {
  console.log("Timer 1 done");
}, 1000); // start a timer of 1s
setTimeout(function f() {
  console.log("timer 2 done");
}, 0); // start a timer of 0ms
setTimeout(function f() {
  console.log("Timer 3 done");
}, 50); // start a timer of 50ms
blockingLoop();
setTimeout(function f() {
  console.log("Timer 4 done");
}, 20); // start a timer of 20ms
x += 10;
