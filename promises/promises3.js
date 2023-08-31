let p = new Promise(function exec(resolve, reject) {
  console.log("inside exec");
  let a = 30;
  console.log("Started the timer");
  setTimeout(function f() {
    a += 10;
    resolve(a);
    console.log("Timer done");
  }, 10000);
  console.log("Timer is running");
  a += 5;
});
p.then(
  function f1(v) {
    console.log("fulfill handler 1", v);
  },
  function r1(v) {
    console.log("reject handler 1", v);
  }
);
p.then(
  function f2(v) {
    console.log("fulfill handler 2", v);
  },
  function r2(v) {
    console.log("reject handler 2", v);
  }
);
