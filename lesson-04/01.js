function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true; // элемент найден
        }
    }
    return false; // элемент не найден
}

// Пример использования:
console.log(includesElement([1, 2, 3], 2)); // true
console.log(includesElement([1, 2, 3], 5)); // false
