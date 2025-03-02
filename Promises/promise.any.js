function promiseAny(promises = []) {
    let errors = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                errors[index] = err;
                if (index === promises.length - 1) {
                    reject(new AggregateError(errors, "All promises were rejected"))
                }
            })
        })
    })

}

const promise1 = Promise.reject(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'quick'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, 'slow'));

const promises = [promise1, promise2, promise3];

console.log("Polyfill", promiseAny(promises)
.then(data => console.log("Polyfill",data))
.catch(err => console.log(err))
);

console.log("Original", Promise.any(promises)
.then(data => console.log("Original",data))
.catch(err => console.log(err))
);
