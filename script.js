document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('text');
  const continueBtn = document.getElementById('continueBtn');
  const mainContent = document.getElementById('main');
  const intro = document.getElementById('intro');

  const text = "hi aden! i hope you like this little website i made for you";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // 4 characters per second (1000ms / 4)
    } else {
      continueBtn.classList.add("yum");
    }
  }

  typeWriter();

  continueBtn.addEventListener('click', () => {
    intro.classList.add('fade-out');
    setTimeout(() => {
      intro.style.display = 'none';
      mainContent.classList.add("yum");
    }, 500); // Match this with the fadeOut animation duration
  });
});
