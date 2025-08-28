function isNumeric(str) {
    if (typeof str != "string") return false; // Если не строка — сразу false
    return !isNaN(str) && str.trim() !== "";  // Проверяем, что это число и строка не пустая
}

// Тесты
console.log(isNumeric("123"));       // true
console.log(isNumeric("12.3"));      // true
console.log(isNumeric("123abc"));    // false
console.log(isNumeric("abc"));       // false
console.log(isNumeric(" "));         // false
