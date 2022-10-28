const btn = document.querySelector('.btn');
const cardBack = document.querySelector('.card__back');
const cardCount = document.querySelector('.card__count');
const cardOpen = document.querySelector('.card__open');

arr = ['./assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg', './assets/img/4.jpg', './assets/img/5.jpg', './assets/img/6.jpg', './assets/img/7.jpg', './assets/img/8.jpg', './assets/img/9.webp',]

cardBack.addEventListener('click', () => {
  let randomArr = arr.sort(() => Math.random() - 0.5);
  cardOpen.src = randomArr[0]
  randomArr.shift(randomArr[0]);
  if (randomArr.length === 0) {
    btn.classList.add('active')
    cardBack.classList.add('noneclick')
  }
  cardCount.innerHTML = `Карт в колоде ${randomArr.length}`
  console.log(randomArr.length + 1);
})

btn.addEventListener('click', () => {
  window.location.reload();
})

