/const filter = (array, callback) => {
const result = []; // новый массив для результатов

array.forEach((element, index) => {
    if (callback(element, index)) { // вызываем колбэк
        result.push(element); // если true → добавляем
    }
});

return result; // возвращаем новый массив
};

// Проверка
const numbers = [1, 2, 3, 4, 5];

const oddNumbers = filter(numbers, (element, index) => {
    return element % 2 !== 0;
});

console.log(oddNumbers); // [1, 3, 5]
