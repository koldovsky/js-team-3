// Yaryna Martyniuk below

function lovefunc(flower1, flower2) {
    if ((flower1 + flower2) % 2 === 1) {
      return true;
    }
    return false;
  }

// Iryna Litvinova below
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  }
  if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
lovefunc();
