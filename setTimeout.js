function createSetTimeOut() {
    let timerId = 0; // for clearing time
    let timerMap = {} // to keep track of timer id

    function setTimeoutPolyfill(callback, delay, ...args) {
        var id = timerId++;
        timerMap[id] = true; // ongoing callback which needs to be executed
        var start = Date.now()

        function triggerCallback() { // keeps checking that we have reached delay
            if(!timerMap[id]) return
            if (Date.now() > (start + delay)) callback(...args)
            else requestIdleCallback(triggerCallback)
        }
        requestIdleCallback(triggerCallback)
        return id
    }
    
    function clearTimeoutPolyfill(id) {
        delete timerId[id]
    }

    return { setTimeoutPolyfill, clearTimeoutPolyfill }
 }

const callbackFn = (name) => console.log("I'm logged!", name)
const { setTimeoutPolyfill, clearTimeoutPolyfill } = createSetTimeOut()

console.log("start")
let timerId = setTimeoutPolyfill(callbackFn, 1000, "Vibha")
clearTimeoutPolyfill(timerId)
console.log("end")
