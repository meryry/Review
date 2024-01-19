// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Jennifer Lawrence',
    job: 'Actress',
    img: 'https://tse4.mm.bing.net/th?id=OIP.2n_M6pipYHOlPzU21Hd_kwHaEo&pid=Api&P=0&h=180',
    text:"As the highest-paid actress in the world in 2015 and 2016, and with her films grossing over $5.5 billion worldwide, Jennifer Lawrence is often cited as the most successful actress of her generation.",
  },
  {
    id: 2,
    name: 'Gary Ross',
    job: 'Director & Writer',
    img: 'https://i0.wp.com/cinedweller.com/wp-content/uploads/2020/09/gary-ross.jpg?fit=618%2C900&ssl=1',
    text: 'Gary Ross is an American writer, director and actor born November 3rd, 1956 in Los Angeles, California. His father was screenwriter Arthur A. Ross (1920 - 2008). After writing for television series The Hitchhiker (1983) in 1986, Ross broke through by penning the Tom Hanks hit Big (1988), his first screenplay to be made into a feature film.',
  },
  {
    id: 3,
    name: 'Josh Hutcherson',
    job: 'American actor and producer',
    img: 'https://www.thehandbook.com/cdn-cgi/image/width=300,height=300,fit=cover,q=85/https://files.thehandbook.com/uploads/2014/10/Joshhutcherson.jpg',
    text: 'Joshua Ryan Hutcherson was born on October 12, 1992 in Union, Kentucky to Michelle Fightmaster, who worked for Delta Air Lines, and Chris Hutcherson, an EPA analyst. He has one younger brother, Connor Hutcherson.',
  },
  {
    id: 4,
    name: 'Elizabeth Banks',
    job: 'American actress',
    img: 'https://i.pinimg.com/originals/a6/b7/11/a6b711c6ddd15dcf230ec14d5286410b.jpg',
    text: 'Elizabeth Banks was born Elizabeth Mitchell in Pittsfield, a small city in the Berkshires in western Massachusetts near the New York border, on February 10, 1974. She is the daughter of Anne Marie (Wallace), who worked in a bank, and Mark Phineas Mitchell, a factory worker. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
//show the first person
startBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});
//show the last person
endBtn.addEventListener('click', function () {
    currentItem = 3;
  showPerson(currentItem);
});