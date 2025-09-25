function capitalizeWords(str) {
    // Разделяем строку на отдельные слова
    const words = str.split(' ');

    // Проходим по каждому слову
    for (let i = 0; i < words.length; i++) {
        const word = words[i];               // берём текущее слово
        words[i] = word[0].toUpperCase() +  // первая буква в верхний регистр
            word.slice(1);           // остальная часть слова без изменений
    }

    // Склеиваем слова обратно в строку через пробел
    return words.join(' ');
}
