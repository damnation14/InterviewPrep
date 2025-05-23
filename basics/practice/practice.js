function MyPromise(executor) {
  let onResolve, val, isCalled, isResolved, onReject, isRejected;

  function resolve(value) {
    val = value;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(value) {
    val = value;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isResolved && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  };

  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      onReject(val);
      isCalled = true;
    }
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

const m = new Promise((resolve, reject) => {
  resolve("heyy");
});
