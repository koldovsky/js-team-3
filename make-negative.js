// Yaryna Martyniuk below

function makeNegative(num) {
    return -Math.abs(num);
  }
  
// Iryna Litvinova solution below
let num;
function makeNegative(num) {
  if (num < 0) {
    return num;
  }
  if (num === 0) {
    return 0;
  } else {
    return num - num * 2;
  }
}
makeNegative();

// Valentyna Vilchak solution below
function makeNegative(num) {
 
return -Math.abs(num);
}
