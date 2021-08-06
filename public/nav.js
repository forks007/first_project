const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const hrsbtn = document.querySelector('#hrsbtn');
const hrs = document.querySelector('#hrs');
const cntctbtn = document.querySelector('#cntctbtn');
const cntct = document.querySelector('#cntct');

const nobtn = document.querySelector('#nobtn');
const no = document.querySelector('#no');

burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});



hrsbtn.addEventListener('click', (e) => {
  if (hrs.classList.contains('hidden')) {
    hrs.classList.remove('hidden');
  } else {
    hrs.classList.add('hidden');
  }
});

cntctbtn.addEventListener('click', (e) => {
  if (cntct.classList.contains('hidden')) {
    cntct.classList.remove('hidden');
  } else {
    cntct.classList.add('hidden');
  }
});

nobtn.addEventListener('click', (e) => {
  if (no.classList.contains('hidden')) {
    noclassList.remove('hidden');
  } else {
    no.classList.add('hidden');
  }
});


