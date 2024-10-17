function setRating(rating) {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  
    console.log(`Рейтинг: ${rating}`);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    setRating(3); // Якщо потрібно почати з певного рейтингу
  });
  
  console.log(`=======================================================`);

 const currentDate = new Date();
  // Отримуємо назву дня тижня, місяця та число
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();

  // Функція для додавання закінчень (st, nd, rd, th) до числа
  function getDayWithSuffix(day) {
    if (day > 3 && day < 21) return day + "th"; // Виключення для чисел 11-20
    switch (day % 10) {
      case 1: return day + "st";
      case 2: return day + "nd";
      case 3: return day + "rd";
      default: return day + "th";
    }
  }

  // Формуємо дату у потрібному форматі
  const formattedDate = `${dayOfWeek} ${month} ${getDayWithSuffix(day)}`;

  // Знаходимо елемент і вставляємо в нього відформатовану дату
  document.querySelector('.current-date').textContent = formattedDate;

  console.log(`=======================================================`);

  // Масив з об'єктами жанрів
const genres = [
    { name: "Drama", url: "https://www.netflix.com/ua-en/browse/genre/5763" },
    { name: "Thriller", url: "https://www.netflix.com/ua-en/browse/genre/8933" },
    { name: "Supernatural", url: "https://www.netflix.com/ua-en/browse/genre/42025" }
  ];
  
  // Знаходимо h3 елемент для вставки жанрів
  const genreList = document.getElementById("genre-list");
  
  // Генеруємо HTML для кожного жанру та додаємо розділювач "|"
  genres.forEach((genre, index) => {
    const link = document.createElement("a");
    link.href = genre.url;
    link.target = "_blank";
    link.textContent = genre.name;
  
    genreList.appendChild(link);
  
    if (index < genres.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = " | ";
      genreList.appendChild(separator);
    }
  });
  