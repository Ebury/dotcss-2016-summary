/* global Reveal, hljs */

Reveal.initialize({
  controls: false,
  history: true,
  transition: 'convex'
});

Reveal.addEventListener( 'ready', function( event ) {
    hljs.initHighlighting()
} );

Reveal.addEventListener('fragmentshown', event => {
  let example = parseInt(event.fragment.dataset.example);
  switch (example) {
    case 1:
      document.querySelector(':root').style.setProperty('--color', 'green');
      break;
  }
});

Reveal.addEventListener('fragmenthidden', event => {
  let example = parseInt(event.fragment.dataset.example);
  switch (example) {
    case 1:
      document.querySelector(':root').style.setProperty('--color', 'red');
      break;
  }
});