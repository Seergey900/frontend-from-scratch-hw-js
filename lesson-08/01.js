petShop.addEventListener('click', function(event) {
  // Проверяем, что клик был именно по кнопке питомца
  if (event.target.classList.contains('pet')) {
    const petId = event.target.id;

    if (cart.length >= 3) {
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев';
    } else {
      cart.push(petId);
      messageBox.textContent = ''; // очищаем сообщение
      updateCartDisplay();
    }
  }
});
