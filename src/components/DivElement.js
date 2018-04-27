const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// let foo = new DivElement('hello');
// let divString = foo.render();
// console.log(divString);

// Export class here
module.exports = DivElement;
