// Yaryna Martyniuk below
// +1 Valentyna Vilchak

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Iryna Litvinova below
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let totalGoals = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalGoals += arguments[i];
  }
  return totalGoals;
}
goals();
