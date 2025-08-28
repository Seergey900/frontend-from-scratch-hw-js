function capitalizeWords(str) {
    const words = str.split(' '); // разбиваем строку на слова
    for (let i = 0; i < words.length; i++) {
        // берем первое письмо и делаем заглавным, остальное - строчными
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' '); // соединяем слова обратно в строку
}

// Пример использования:
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"
