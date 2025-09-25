function truncate(str, maxLength) {
    // Проверяем, длиннее ли строка, чем maxLength
    if (str.length > maxLength) {
        // Обрезаем строку до maxLength символов и добавляем "..."
        return str.slice(0, maxLength) + '...';
    } else {
        // Если строка короче или равна maxLength, возвращаем её как есть
        return str;
    }
}
