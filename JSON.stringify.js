function stringify(data) {
  // your code here
  if (typeof data === "function") return undefined
  else if (typeof data === "symbol") return undefined
  else if (typeof data === "bigint") throw Error("bigint not supported!")
  else if ([NaN, null, Infinity, undefined].includes(data)) return `null`
  else if (typeof data === "number") return `${data}`
  else if (typeof data === "boolean") return `${data}`
  else if (typeof data === "string") return `"${data}"`
  else if (data && Array.isArray(data)) return `[${data.map(ele => typeof ele === "symbol" ? "null" : stringify(ele)).join()}]`;
  else if (data instanceof Date) return `"${data.toISOString()}"`;
  else if (typeof data === "object") {
    let stringObj = '{' + Object.keys(data).filter(key => data[key] !== undefined).map(key => `"${key}":${stringify(data[key])}`).join() + '}'
    return stringObj
  }
}

stringify({a: { b: [1,2,3,4], c: true, d: undefined} })