import * as Reveal from './reveal/reveal';
import head from './reveal/head'

Reveal.initialize({
  controls: false,
  history: true,
  transition: 'convex',

  dependencies: [
    {
      src: 'scripts/reveal/highlight.js',
      async: true,
      callback: () => hljs.initHighlightingOnLoad()
    },
  ]
});

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