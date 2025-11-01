const model = {
  movies: [],
  addMovie(title, description) {
    const id = Math.random();
    const newMovie = { id, title, description };
    this.movies.push(newMovie);
    view.renderMovies(this.movies);
  },
  deleteMovie(id) {
    this.movies = this.movies.filter(movie => movie.id != id);
    view.renderMovies(this.movies);
  },
};

const view = {
  init() {
    this.renderMovies(model.movies);

    const form = document.querySelector('.form');
    const inputTitle = document.querySelector('.input-title');
    const inputDescription = document.querySelector('.input-description');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const title = inputTitle.value;
      const description = inputDescription.value;
      controller.addMovie(title, description);

      inputTitle.value = '';
      inputDescription.value = '';
    });

    // обработчик удаления фильмов
    const list = document.querySelector('.list');
    list.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-button')) {
        const id = event.target.closest('li').id;
        controller.deleteMovie(id);
      }
    });
  },
  renderMovies(movies) {
    const list = document.querySelector('.list');
    let moviesHTML = '';

    for (const movie of movies) {
      moviesHTML += `
        <li id="${movie.id}" class="movie">
          <b class="movie-title">${movie.title}</b>
          <p class="movie-description">${movie.description}</p>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `;
    }

    list.innerHTML = moviesHTML;
  },
  displayMessage(message, isError = false) {
    const messageBox = document.querySelector('.message-box');
    messageBox.textContent = message;
    if (isError) {
      messageBox.classList.remove('success');
      messageBox.classList.add('error');
    } else {
      messageBox.classList.remove('error');
      messageBox.classList.add('success');
    }
  },
};

const controller = {
  addMovie(title, description) {
    if (title.trim() !== '' && description.trim() !== '') {
      model.addMovie(title, description);
      view.displayMessage('Фильм добавлен успешно!');
    } else {
      view.displayMessage('Заполните все поля!', true);
    }
  },
  deleteMovie(id) {
    model.deleteMovie(id);
    view.displayMessage('Фильм успешно удалён!');
  },
};

function init() {
  view.init();
}

document.addEventListener('DOMContentLoaded', init);
