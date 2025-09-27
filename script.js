// script.js — JS performant pour menu mobile et année footer

// Hamburger menu
const hambBtn = document.getElementById('hambBtn');
const mobileNav = document.getElementById('mobileNav');

hambBtn.addEventListener('click',()=>{
  const expanded = mobileNav.style.display === 'block';
  mobileNav.style.display = expanded ? 'none' : 'block';
});

// Fermer menu mobile au clic sur lien
mobileNav.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click',()=>{mobileNav.style.display='none'});
});

// Footer année dynamique
document.getElementById('year').textContent = new Date().getFullYear();
