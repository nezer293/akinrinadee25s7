const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

function toggleComments() {
  const isHidden = commentWrapper.style.display === 'none';
  commentWrapper.style.display = isHidden ? 'block' : 'none';
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  showHideBtn.setAttribute('aria-expanded', isHidden);
}

showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleComments();
  }
});

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  namePara.innerHTML = `<strong>${nameField.value}:</strong> ${commentField.value}`;
  listItem.appendChild(namePara);
  list.appendChild(listItem);
  nameField.value = '';
  commentField.value = '';
};
