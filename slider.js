const mainContainer = document.getElementById('main-container');
const mainContainerRect = mainContainer.getBoundingClientRect();
const sliderElement = document.getElementById('comparison-slider');
const secondImageElement = document.getElementById('second-image');
let sliderActivated = false;

sliderElement.addEventListener('pointerdown', () => sliderActivated = true);
window.addEventListener('pointerup', () => sliderActivated = false);
window.addEventListener('pointermove', updateSliderAndImageCurrentValues);

function updateSliderAndImageCurrentValues(mouseEvent) {
  if (!sliderActivated) {
    return;
  }
  
  const cursorPosition = getCurrentCursorPositionInPercentage(mouseEvent);
  let currentRightAndWidthValue = 100 - cursorPosition[0];
  currentRightAndWidthValue = currentRightAndWidthValue > 100 ? 100 : currentRightAndWidthValue;
  currentRightAndWidthValue = currentRightAndWidthValue < 0 ? 0 : currentRightAndWidthValue;

  sliderElement.style.right = secondImageElement.style.width = `${currentRightAndWidthValue}%`;
}

function getCurrentCursorPositionInPercentage(mouseEvent) {
  const xValueRelativeToTheMainContainer = mouseEvent.clientX - mainContainerRect.left;
  const yValueRelativeToTheMainContainer = mouseEvent.clientY - mainContainerRect.top;
  return [
    xValueRelativeToTheMainContainer / mainContainer.offsetWidth * 100,
    yValueRelativeToTheMainContainer / mainContainer.offsetHeight * 100
  ];
}
