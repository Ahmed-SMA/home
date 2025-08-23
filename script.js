document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav nav');
  if (burger && nav) {
    burger.addEventListener('click', ()=>{
      if (getComputedStyle(nav).display === 'none') {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '12px';
        nav.style.background = 'rgba(14,15,17,.98)';
        nav.style.position = 'absolute';
        nav.style.top = '64px';
        nav.style.right = '5%';
        nav.style.padding = '16px';
        nav.style.border = '1px solid var(--line)';
        nav.style.borderRadius = '12px';
      } else {
        nav.style.display = 'none';
      }
    });
  }
});