const fetchApi = (m) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (m) {
        return resolve("hehe");
      }
      return reject("oh no");
    }, 3000);
  });

fetchApi(true).then(console.log).catch(console.log);
