const GARDEN_SIZE = 300;

function plantPoppies() {
  const poppies = document.getElementById('poppies');
  for(let i = 0; i < GARDEN_SIZE; i++) {
    const newImg = document.createElement("img");
    newImg.src = "img/poppy-s.png";
    newImg.style.cssText = `margin-right: -${Math.floor(15 + Math.random() * 30)}px; margin-bottom: -${Math.floor(15 + Math.random() * 30)}px;`
    poppies.appendChild(newImg);
  }
}

function wind() {
  const images = document.getElementsByTagName('img');
  for(let img of images) {
    const shouldBlow = Math.floor(Math.random() * 10) % 3 === 0;
    if (shouldBlow) {
      img.classList.add('wind');
    } else{
      img.classList.remove('wind');
    }
  }
}

plantPoppies();
setInterval(wind, 500);