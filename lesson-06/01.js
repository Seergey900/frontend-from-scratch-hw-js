const filter = (array, callback) => {
    const result = []; // новый массив для результатов
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) { // вызываем колбэк
            result.push(array[i]); // если true → добавляем элемент
        }
    }
    return result; // возвращаем новый массив
};

// Проверка
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = filter(numbers, (element, index) => element % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]
