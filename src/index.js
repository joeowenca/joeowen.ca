import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.body.onscroll = function() {ScrollTransition()}

function ScrollTransition() {
  const header = document.getElementById('header')
  const intro = document.getElementById('intro')
  const content = document.getElementById('content')
  const headerImg = document.getElementById('header-img')
  const headerText = document.getElementById('header-text')

  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop
  
  const ceiling = 80
  const floor = 300

  // Calculate current (Scroll Position / Heigh) for background alpha
  let height = (intro.offsetHeight / 2)
  let alpha = ((scrollPos) / height)

  // Update header background color
  content.style.backgroundColor = "rgba(26, 26, 26, " + alpha + ")"

  // Hide header image
  if (alpha >= 1) {
    headerImg.classList.remove('hidden')
    headerText.classList.remove('hidden')
    header.style.backgroundColor = "rgba(26, 26, 26, 1)"
  } else {
    headerImg.classList.add('hidden')
    headerText.classList.add('hidden')
    header.style.backgroundColor = "rgba(26, 26, 26, 0)"
  }


  console.log(alpha)

}
