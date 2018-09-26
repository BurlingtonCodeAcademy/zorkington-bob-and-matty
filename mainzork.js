class Room {
  constructor() {
  }
}

const mainSt = new Room();
const mrMikes = new Room();
const muddyWaters = new Room();
const foyer = new Room();
const classRoom = new Room();

function enterRoom (nextRoom) {
  let validTransition = room[currentRoom].canChangeTo;
  if (validTransition.includes(nextRoom)) {
    currentRoom = nextRoom;
  }
  else {
    throw 'invalid path from ' + currentRoom + ' to ' + nextRoom;
  }
}

let currentRoom = mainSt;
/*function moveToRoom(newRoom) {
  if (validTransition.includes(newRoom)) {
    currentRoom = newRoom
  }
}*/

state = {
  "mainSt": {canChangeTo: ["foyer", "mrMikes", "muddyWaters"]},
  "mrMikes": {canChangeTo: ["mainSt"]},
  "muddyWaters": {canChangeTo: ["mainSt"]},
  "foyer": {canChangeTo: ["mainSt", "classRoom"]},
  "classRoom": {canChangeTo: ["foyer"]}

};

console.log(currentRoom);
enterRoom(mrMikes);
console.log(currentRoom)
