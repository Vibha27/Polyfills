/**
 * The memoize function creates a cache object and returns an anonymous function that acts as 
 the memoized version of the original function. Inside the anonymous function, 
 we first generate a unique key by stringifying the input arguments using JSON.stringify. 
 We then check if the result for the given key exists in the cache. 
 If it does, we return the cached result. Otherwise, we invoke the 
original function using func.apply(this, args) to preserve the correct context and pass the arguments. 
We store the result in the cache and return it.
 *  */
function memoizeFn(fn) {
    let cacheData = {};
    return (...args) => {
        let key = JSON.stringify(args)

        if(key in cacheData) {
            return cacheData[key]
        } else {
            cacheData[key] = fn.apply(this,args);
            return cacheData[key]
        }
    }
}

function add(num1, num2) { 
    return num1 + num2 
}

const result = memoizeFn(add)
console.log(result(2,3))
console.log(result(2,3))

