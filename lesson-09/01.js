function filter(array, callback) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            result.push(array[i])
        }
    }

    return result
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
    return element % 2 !== 0
});

console.log(oddNumbers) // [1, 3, 5]
