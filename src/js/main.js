'use strict';

const panels = document.querySelectorAll('.panel');

function handleToggleOpen() {
  this.classList.toggle('open');
}

function handleToggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((eachPanel) => {
  eachPanel.addEventListener('click', handleToggleOpen);
});
panels.forEach((eachPanel) => {
  eachPanel.addEventListener('transitionend', handleToggleActive);
});
