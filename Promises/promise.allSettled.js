function promiseAllSettled (promises) {

    let result = [];

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((data) => {
                result[index] = { value: data, status: "fulfilled" }
            })
            .catch(err => {
                result[index] = { status: "rejected", reason: err }
            })
            .finally(() => {
                if (index === promises.length - 1) {
                    resolve(result)
                }
            })
        });
    })

}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(null);

promiseAllSettled([promise1, promise2, promise3])
.then(data => console.log(data))
.catch(err => console.log(err))