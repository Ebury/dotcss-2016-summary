/* global Reveal, hljs */

Reveal.initialize({
  controls: false,
  history: true,
  transition: 'convex',
  keyboard: {
    37: 'prev',
    39: 'next',
  }
});

Reveal.addEventListener('ready', event => hljs.initHighlighting());

Reveal.addEventListener('fragmentshown', event => {
  let example = event.fragment.dataset.example;
  window[example]('show');
});

Reveal.addEventListener('fragmenthidden', event => {
  let example = event.fragment.dataset.example;
  window[example]('hide');
});

Reveal.addEventListener('slidechanged', event => {
 if (event.indexh === 0) {
    document.querySelector('.js-instructions').classList.remove('hide');
 } else {
   document.querySelector('.js-instructions').classList.add('hide');
 }
});

window.addEventListener('mousedown', e => {
  e.preventDefault();
  if(e.button === 0) Reveal.next();
  if(e.button === 2) Reveal.prev();
}, false);
window.addEventListener('contextmenu', e => e.preventDefault(), false);

window.cssVariables1 = function cssVariables1(action) {
  let color = action === 'show' ? 'green' : 'red';
  document.querySelector(':root').style.setProperty('--color', color);
};

window.cssVariables2 = function cssVariables2() {
  let element = document.querySelector('.js-text');
  let maxScroll = element.scrollHeight - element.clientHeight;
  let currentScroll = element.scrollTop;
  let percentageScroll = currentScroll * 100 / maxScroll;
  document.querySelector('.js-progress-bar').style.setProperty('--progress', percentageScroll);
};

window.webfonts1 = function webfonts1(action) {
  let variantNumeric = action === 'show' ? 'oldstyle-nums' : 'normal';
  document.querySelector('.js-example-webfonts-1').style.setProperty('font-variant-numeric', variantNumeric);
};

window.webfonts2 = function webfonts2(action) {
  let variantNumeric = action === 'show' ? 'tabular-nums' : 'proportional-nums';
  document.querySelector('.js-example-webfonts-2').style.setProperty('font-variant-numeric', variantNumeric);
};

window.webfonts3 = function webfonts3(action) {
  let variantNumeric = action === 'show' ? 'diagonal-fractions' : 'normal';
  document.querySelector('.js-example-webfonts-3').style.setProperty('font-variant-numeric', variantNumeric);
};


$('.example-css-variables-4 .text').scroll(() => cssVariables2());
