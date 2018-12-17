const coords = {
  x: 10,
  y: 20,
};

// const valueX = coords.x || 0;
// const valueY = coords.y || 0;

const { x: valueX = 0, y: valueY = 0 } = coords;
console.log(valueX);

const { x = 0, y = 0 } = coords;
console.log(x);
