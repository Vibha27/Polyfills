function promiseRace(promises = []) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            Promise.resolve(promise).then(resolve, reject);
        }
    });
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(0);

const promises = [promise2, promise1];


promiseRace(promises)
    .then(data => console.log("polyfill:", data))
    .catch(err => console.log("polyfill error:", err));

Promise.race(promises)
    .then(data => console.log("original:", data))
    .catch(err => console.log("original error:", err));