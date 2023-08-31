let p = new Promise(function exec(resolve, reject) {
  console.log("inside exec");
  let a = 30;
  console.log("Started the timer");
  setTimeout(function f() {
    a += 10;
    resolve(a);
    console.log("Timer done");
  }, 5000);
  console.log("Timer is running");
  a += 5;
});
