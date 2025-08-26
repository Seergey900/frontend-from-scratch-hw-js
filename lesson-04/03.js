function findCommonElements(array1, array2) {
    let commonArray = []; // сюда складываем общие элементы

    for (let i = 0; i < array1.length; i++) {
        let element = array1[i];

        // проверяем, есть ли элемент из array1 в array2
        // и при этом его еще нет в commonArray, чтобы не было дубликатов
        if (includesElement(array2, element) && !includesElement(commonArray, element)) {
            commonArray.push(element);
        }
    }

    return commonArray;
}

// Пример использования:
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // выведет [2, 3]
