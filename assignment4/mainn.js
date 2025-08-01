const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Image file names and alt text */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altText = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'Ancient Egyptian mural',
  'pic5.jpg': 'A beautiful butterfly on a leaf'
};

/* Base path for images */
const basePath = '/akinrinadee25s7/img/';

/* Loop through images and create thumbnails */
imageFiles.forEach(file => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', basePath + file);
  newImage.setAttribute('alt', altText[file]);
  thumbBar.appendChild(newImage);

  // When a thumbnail is clicked, update main image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', basePath + file);
    displayedImage.setAttribute('alt', altText[file]);
  });
});

/* Darken/Lighten button functionality */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
