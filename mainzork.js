function enterRoom (nextRoom) {
  let validTransition = room[currentRoom].canChangeTo;
  if (validTransition.includes(nextRoom)) {
    currentRoom = nextRoom;
  }
  else {
    throw 'invalid path from ' + currentRoom + ' to ' + nextRoom;
  }
}
let currentRoom = null;
function moveToRoom(newRoom) {
  if (canMoveToRoom(newRoom)) {
    currentRoom = newRoom
  }
}
state = {
  "mainSt": {canChangeTo: ["foyer", "mrMikes", "muddyWaters"]},
  "mrMikes": {canChangeTo: ["mainSt"]},
  "muddyWaters": {canChangeTo: ["mainSt"]},
  "foyer": {canChangeTo: ["mainSt", "classRoom"]},
  "classRoom": {canChangeTo: ["foyer"]}

};


const mainSt = {
  mainDoor : 'isLocked',
  sign : 'Welcome to Burlington Code Academy!/n Come on up to the second floor./n If the door is locked, use the code12345.'
  
};

const mrMikes = {

};

const muddyWaters = {

};

const foyer = {

};

const classRoom = {

};

/*class Room {
  constructor() {
    this.state = {}
  }
}*/
