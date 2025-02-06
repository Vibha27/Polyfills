// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!")
//     }, 1000);
// })

// Quiz 1
// Promise.resolve(1) -> 1
// .then(() => 2) -> 2
// .then(3) -> not allowed ignored and will throw an error to catch
// .then((value) => value * 3) => 2*3 = 6
// .then(Promise.resolve(4)) => promise goes in pending
// .then(console.log) => 6 will print last calculated value
// output
// 6

// Quiz 2
// Promise.resolve(1)
// .then((val) => {
//   console.log(val)
//   return val + 1
// }).then((val) => {
//   console.log(val)
// }).then((val) => {
//   console.log(val)
//   return Promise.resolve(3)
//     .then((val) => {
//       console.log(val)
//     })
// }).then((val) => {
//   console.log(val)
//   return Promise.reject(4)
// }).catch((val) => {
//   console.log(val)
// }).finally((val) => {
//   console.log(val)
//   return 10
// }).then((val) => {
//   console.log(val)
// })
// output
// 1
// 2
// undefined
// 3
// undefined
// 4
// undefined
// undefined

function promiseAll (promises=[]) {
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(res => {
        results[index] = res;
        if (index === promises.length-1) {
          resolve(results)
        }
      })
      .catch(reject)
    })
  })
}

const promise1 = Promise.resolve(3)
const promise2 = 43;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'test'))

// promiseAll([promise1, promise2, promise3])
// .then(res => console.log(res))
// .catch(err => console.log(err))


function promiseAny(promises=[]) {
  return new Promise((resolve, reject) => {
    let errors = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(res => resolve(res))
      .catch(err => {
        errors[index] = err
        if (index === errors.length-1) {
          reject(new AggregateError(errors, "All promises rejected!"))
        }
      })
    })
  })
}
// Example usage
const promise0 = Promise.reject(0);
const promise11 = Promise.reject(0);
const promise111 = Promise.reject(0);
const promise21 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise31 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise0, promise11, promise111];

// promiseAny(promises).then((value) => console.log(value)).catch(err => console.log(err));

function promiseRace (promises=[]) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(resolve)
      .catch(reject)
    })
  })
}

// promiseRace(promises).then((value) => console.log(value)).catch(err => console.log(err));
// Promise.race(promises).then((value) => console.log(value)).catch(err => console.log(err));

function promiseAllSettled (promises = []) {
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(res => {
        results.push({ status: "fulfilled", value: res })
      })
      .catch(err => {
        results.push({ status: "rejected", reason: err })
      })
      .finally(() => {
        if (index === promises.length - 1) resolve(results)
      })
    })
    
  })
}

promiseAllSettled(promises).then((value) => console.log(value)).catch(err => console.log(err));
Promise.allSettled(promises).then((value) => console.log(value)).catch(err => console.log(err));
