let timeOffline = (Date.now() - Game.lastDate) / 1000;
let cookiesAdded = Math.floor(timeOffline * Game.cookiesPs)
console.log(timeOffline);
console.log(cookiesAdded);
Game.Earn(cookiesAdded);