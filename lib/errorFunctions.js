module.exports.onerror = err => {
    // log any uncaught errors 
    // co will not throw any errors you do not handle!!! 
    // HANDLE ALL YOUR ERRORS!!! 
    console.error(err.stack);
  }