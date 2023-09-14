/*
 * Noel Delgado | @pixelia_me
 */

var items = []
  , point = document.querySelector('svg').createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute('cx', c.x);
    this.clip.setAttribute('cy', c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
  items.push(new Item({
    el: item,
    svg: item.querySelector('svg'),
    clip: document.querySelector('#clip-'+index+' circle'),
  }));
});

[].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
  button.addEventListener('click', changeColor);
});















// JavaScript
function changeScrollbarColors() {
  const root = document.querySelector(':root');

  // Generate random color values
  const trackColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const thumbColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const thumbHoverColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  // Update CSS variables with new colors
  root.style.setProperty('--scrollbar-track-color', trackColor);
  root.style.setProperty('--scrollbar-thumb-color', thumbColor);
  root.style.setProperty('--scrollbar-thumb-hover-color', thumbHoverColor);
}

// Change colors every 5 seconds
setInterval(changeScrollbarColors, 1000);








