// Yaryna Martyniuk below

function move(position, roll) {
    // return the new position
    return position + roll * 2;
  }

// Iryna Litvinova below
let position = 0;
let roll = 0;
function move(position, roll) {
  roll = roll * 2;
  position = roll + position;
  return position;
}
move();

  

