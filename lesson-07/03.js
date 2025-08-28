function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    } else {
        return str;
    }
}

// Примеры
console.log(truncate("Вот, что мне действительно нравится в этом", 20)); // "Вот, что мне действи..."
console.log(truncate("Короткая строка", 20)); // "Короткая строка"
