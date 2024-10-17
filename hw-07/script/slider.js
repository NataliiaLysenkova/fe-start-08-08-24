const movies = [
  { img: 'img/poster-1.png', alt: 'Movie 1', link: 'https://www.netflix.com/ua-en/title/70143836' },
  { img: 'img/poster-2.png', alt: 'Movie 2', link: 'https://www.netflix.com/ua-en/title/80154610' },
  { img: 'img/poster-3.png', alt: 'Movie 3', link: 'https://www.imdb.com/title/tt6598238/' },
  { img: 'img/poster-4.png', alt: 'Movie 4', link: 'https://www.netflix.com/ua-en/title/80192098' },
  { img: 'img/poster-5.png', alt: 'Movie 5', link: 'https://www.netflix.com/ua-en/title/81040344' },
  { img: 'img/poster-6.png', alt: 'Movie 6', link: 'https://www.netflix.com/ua-en/title/80241318' },
  { img: 'img/poster-7.png', alt: 'Movie 7', link: 'https://www.netflix.com/ua-en/title/81092222' },
  { img: 'img/poster-8.png', alt: 'Movie 8', link: 'https://www.netflix.com/ua-en/title/81025696' },
  { img: 'img/poster-9.png', alt: 'Movie 9', link: 'https://www.netflix.com/ua-en/title/81074110' },
  { img: 'img/poster-10.png', alt: 'Movie 10', link: 'https://www.netflix.com/ua-en/title/81465109' },
];

const mWrapper = document.querySelector('.m-wrapper');
const btnLeft = document.querySelector('.control.left');
const btnRight = document.querySelector('.control.right');

function createPosters() {
  movies.forEach(movie => {
    const posterDiv = document.createElement('div');
    posterDiv.classList.add('poster');

    const link = document.createElement('a');
    link.href = movie.link;
    link.target = '_blank'; // Відкривати в новій вкладці

    const img = document.createElement('img');
    img.src = movie.img;
    img.alt = movie.alt;
    img.loading = 'lazy'; // Оптимізація завантаження

    link.appendChild(img);
    posterDiv.appendChild(link);
    mWrapper.appendChild(posterDiv);
  });
}

createPosters();

function getPostersToShow() {
  const width = window.innerWidth;
  if (width >= 1200) {
    return 5;
  } else if (width >= 992) {
    return 4;
  } else if (width >= 768) {
    return 3;
  } else if (width >= 576) {
    return 2;
  } else {
    return 1;
  }
}

let postersToShow = getPostersToShow();
const totalPosters = movies.length;
let totalGroups = Math.ceil(totalPosters / postersToShow);
let maxIndex = totalGroups - 1;
let currentIndex = 0;

// Встановлення ширини .m-wrapper
function setWrapperWidth() {
  mWrapper.style.width = `${100 * totalGroups}%`;
}

setWrapperWidth();

btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

btnRight.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

function updateSlider() {
  const shiftPerGroup = 100 / totalGroups;
  const translateX = -(currentIndex * shiftPerGroup);
  mWrapper.style.transform = `translateX(${translateX}%)`;
}

// Адаптація кількості постерів на основі ширини екрана
function handleResize() {
  const newPostersToShow = getPostersToShow();
  if (newPostersToShow !== postersToShow) {
    postersToShow = newPostersToShow;
    totalGroups = Math.ceil(totalPosters / postersToShow);
    maxIndex = totalGroups - 1;
    currentIndex = 0; // Скидаємо індекс
    setWrapperWidth();
    updateSlider();
  }
}

window.addEventListener('resize', handleResize);