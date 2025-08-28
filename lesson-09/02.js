/function map(array, callback) {
const result = []

for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i))
}

return result
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
    return element * 2
})

console.log(doubledNumbers) // [2, 4, 6, 8, 10]
