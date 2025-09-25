function isNumeric(str) {
    // Убираем пробелы в начале и конце
    str = str.trim();

    // Проверяем, что строка не пустая и что преобразование в число не даст NaN
    return str !== '' && !isNaN(Number(str));
}
