function randRGB() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

for(let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    document.getElementById('canvas').innerHTML += `<div class="pixel" style="background-color:${randRGB()}"></div>`;
  }
}
