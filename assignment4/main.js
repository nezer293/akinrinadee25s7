console.log('pt1');

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if (customName.value.trim() !== '') {
    newStory = newStory.replaceAll('Bob', customName.value);
  }

  if (document.getElementById("uk").checked) {
    const weightInStones = Math.round(300 / 14);
    newStory = newStory.replaceAll("300 pounds", `${weightInStones} stones`);

    const tempInCelsius = Math.round((94 - 32) * 5 / 9);
    newStory = newStory.replaceAll("94 fahrenheit", `${tempInCelsius} centigrade`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
