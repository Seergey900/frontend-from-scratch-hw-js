function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function findUniqueElements(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (!includesElement(uniqueArray, currentElement)) {
            uniqueArray.push(currentElement);
        }
    }

    return uniqueArray;
}

// Пример использования:
console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // [1, 2, 3, 4]
