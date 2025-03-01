function promiseAll(promises = []) {
    let results = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(data => {
                results[index] = data;
                if (index === promises.length - 1) {
                    resolve(results)
                }
            })
            .catch(err => reject(err))
        })
    })

}

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

console.log("Polyfill", promiseAll(promises)
.then(data => console.log("Polyfill",data))
.catch(err => console.log(err))
);

console.log("Original", Promise.all(promises)
.then(data => console.log("Original",data))
.catch(err => console.log(err))
);
