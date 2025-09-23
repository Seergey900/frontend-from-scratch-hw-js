const map = (array, callback) => {
    const result = []; // новый массив для результатов
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i)); // добавляем результат колбэка
    }
    return result; // возвращаем новый массив
};

// Пример использования
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, (element, index) => {
    return element * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
for (l)