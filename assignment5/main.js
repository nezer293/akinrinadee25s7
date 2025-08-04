// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initial state: comments are hidden, button aria-expanded is false
commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false'); // Set initial ARIA state

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-expanded', 'true'); // Update ARIA state
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-expanded', 'false'); // Update ARIA state
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  // Basic validation (optional, but good practice)
  if (!nameValue || !commentValue) {
      alert('Please enter both your name and comment!');
      return;
  }

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';

  // Optionally, put focus back on the name field after submission for convenience
  nameField.focus()
}