function redirectToYouTube() {
  window.location.href = 'https://www.youtube.com/watch?v=tbTmNXbH_Rs';
}

function randomizeButtonPosition() {
  const noButton = document.getElementById('noButton');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const randomX = Math.random() * (windowWidth - buttonWidth);
  const randomY = Math.random() * (windowHeight - buttonHeight);

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

document.getElementById('noButton').addEventListener('mouseover', randomizeButtonPosition);

// Chamar a função pela primeira vez para posicionar o botão "Não" em algum lugar aleatório
randomizeButtonPosition();

function redirectToYouTube() {
  window.open('https://www.youtube.com/watch?v=tbTmNXbH_Rs');
}