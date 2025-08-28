/const model = {
movies: [],
    addMovie(title, description) {
  const id = Math.random()
  const newMovie = { id, title, description }
  this.movies.push(newMovie)
  view.renderMovies(this.movies)
},
deleteMovie(id) {
  // Фильтруем массив, оставляя только те фильмы, id которых не совпадает с переданным
  this.movies = this.movies.filter(movie => movie.id !== Number(id))
  view.renderMovies(this.movies)
}
}

const view = {
  init() {
    this.renderMovies(model.movies)

    const form = document.querySelector('.form')
    const inputTitle = document.querySelector('.input-title')
    const inputDescription = document.querySelector('.input-description')

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      const title = inputTitle.value
      const description = inputDescription.value
      controller.addMovie(title, description)

      inputTitle.value = ''
      inputDescription.value = ''
    })

    // Добавляем делегирование событий для кнопок удаления
    const list = document.querySelector('.list')
    list.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-button')) {
        // Получаем id фильма из родительского элемента (li)
        const movieId = event.target.parentElement.id
        controller.deleteMovie(movieId)
      }
    })
  },
  renderMovies(movies) {
    const list = document.querySelector('.list')
    let moviesHTML = ''

    for (const movie of movies) {
      moviesHTML += `
        <li id="${movie.id}" class="movie">
          <b class="movie-title">${movie.title}</b>
          <p class="movie-description">${movie.description}</p>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `
    }

    list.innerHTML = moviesHTML
  },
  displayMessage(message, isError = false) {
    const messageBox = document.querySelector('.message-box')
    messageBox.textContent = message
    if (isError) {
      messageBox.classList.remove('success')
      messageBox.classList.add('error')
    } else {
      messageBox.classList.remove('error')
      messageBox.classList.add('success')
    }
  },
}

const controller = {
  addMovie(title, description) {
    if (title.trim() !== '' && description.trim() !== '') {
      model.addMovie(title, description)
      view.displ
