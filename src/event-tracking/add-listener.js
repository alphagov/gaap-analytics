'use strict';

module.exports = (element, category, action, label) => {
  if (element.tagName === 'SUMMARY') {
    action = `${action} opened`;
  }
  element.addEventListener('click', () => {
    if (element.tagName === 'SUMMARY') {
      const actionWords = action.split(' ');
      const oldState = actionWords[actionWords.length - 1];
      const newState = element.parentElement.hasAttribute('open') ? 'closed' : 'opened';
      action = action.replace(oldState, newState);
    }
    ga('send', 'event', category, action, label);
  });
};
