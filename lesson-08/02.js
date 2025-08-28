const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  if (isTimerStarted) return  // предотвращаем запуск второго таймера

  let counter = 3
  countdownDisplay.textContent = counter
  isTimerStarted = true

  timerId = setInterval(() => {
    counter--
    if (counter > 0) {
      countdownDisplay.textContent = counter
    } else {
      clearInterval(timerId)
      countdownDisplay.textContent = '🚀'
      isTimerStarted = false
    }
  }, 1000)
})

cancelButton.addEventListener('click', () => {
  if (!isTimerStarted) return  // таймер не запущен — ничего не делаем

  clearInterval(timerId)
  isTimerStarted = false
  countdownDisplay.textContent = 'Отменено'
})
