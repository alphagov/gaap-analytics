'use strict';

module.exports = element => {
  element.addEventListener('submit', e => {
    e.preventDefault();
    const gaParams = {
      hitType: 'pageview',
      page: e.target.dataset.virtualPageview || ''
    };
    const parameters = e.target.dataset.parameters;

    if (parameters) {
      parameters.split(' ').forEach(parameter => {
        const key = parameter.split(':')[0];
        const input = parameter.split(':')[1];
        if (e.target.elements[input]) {
          gaParams[key] = e.target.elements[input].value;
        } else {
          gaParams[key] = input;
        }
      });
    }

    ga('send', gaParams);
    e.target.submit();
  });
};
