function stringify(data) {
    // your code here
    if (data === undefined) return undefined
    else if (data === null) return `${data}`
    else if (typeof data === "function") return undefined
    else if (typeof data === "number") return `${data}`
    else if (typeof data === "boolean") return `${data}`
    else if (typeof data === "string") return `"${data}"`
    else if (data && Array.isArray(data)) return `[${data}]`
    else if (typeof data === "object") {
      let stringObj = Object.keys(data).reduce((acc, curr) => {
        let obj = `{"${curr}" : ${stringify(data[curr])}}`;
        acc += obj;
        return acc
      }, '')
      console.log(stringObj, JSON.stringify(data))
      return stringObj
    }
  
  }
  
  stringify({a: 1})