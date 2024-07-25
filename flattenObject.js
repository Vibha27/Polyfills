/**
 * input = {
    a: 1,
    b: 2,
    c : {
        d: 3,
        e : {
            f: 4
        }
    }
} 
    output = { a: 1; b: 2; c.d: 3, c.e.f: 4 }
 */
function flattenObject(obj, parent='') {
    let result = {}

    const generateFlatObject = (obj, parent) => {
        for(let i in obj) {
            let parentKey = parent + i
            if(typeof obj[i] === "object") {
                generateFlatObject(obj[i], parentKey+".")
            } else {
                result[parentKey] = obj[i]
            }
        }
    }

    generateFlatObject(obj, parent)

    return result
}

const nestedObject = {
    a: 1,
    b: 2,
    c : {
        d: 3,
        e : {
            f: 4
        }
    }
}

console.log(flattenObject(nestedObject))