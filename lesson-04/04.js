function doubleEachCharacter(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i]; // добавляем символ дважды
    }

    return result;
}

// Пример использования:
console.log(doubleEachCharacter('hello')); // 'hheelllloo'
