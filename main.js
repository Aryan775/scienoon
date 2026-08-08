
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior:'smooth'
    });
  });
});

const buyButtons = document.querySelectorAll('.price-card .btn');

buyButtons.forEach(button => {
  button.addEventListener('click', function () {
    const posterTitle = this.parentElement.querySelector('h3').innerText;
    alert(`Thank you for your interest in "${posterTitle}"!`);
  });
});
const viewOfferingsBtn = document.querySelector('.hero .btn');

viewOfferingsBtn.addEventListener('click', function () {
  document.querySelector('#pricing').scrollIntoView({
    behavior: 'smooth'
  });
});