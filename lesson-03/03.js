// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1; // Если num1 больше или равно обоим остальным, то это наибольшее число
    } else if (num2 >= num1 && num2 >= num3) {
        return num2; // Если num2 больше или равно обоим остальным, то это наибольшее число
    } else {
        return num3;  }
}
