class Room {
  constructor() {
    roomInventory = []
  }
}

const playerInventory = [];
const rooms = [];

const mainSt = new Room();
mainSt.description = () => {
  console.log('You are standing on Main St.\nIn front of you is a door with a keypad.\nthere is a sign beside the door')};
mainSt.sign = () => {
  console.log('Welcome to the Burlington Code Academy.\nthe door code is 12345')};

const mrMikes = new Room();
mrMikes.description = () => {
  console.log('You enter Mr. Mikes.\nYou are surrounded by the delicious fragrance of cooking pizza.')
};
mrMikes.pizza = () => {
  console.log('You buy some tasty pizza');
  playerInventory.push('pizza')
};

const muddyWaters = new Room();
muddyWaters.description = () => {
  console.log('You bang your head on the ceiling as you enter the dungeon-like confines of Muddy Waters. /n the coffee shop hums with activity')};
muddyWaters.coffee = () => {
  console.log();
  playerInventory.push('coffee')
}

const foyer = new Room();
foyer.isLocked = true;
foyer.description = () => {
  console.log('You are standing in a foyer.\nIn the corner is a pile of newspapers.')
};
foyer.takePaper = () => {
  playerInventory.push('newspaper')
};

const classRoom = new Room();
classRoom.description = () => {
  console.log('You enter a well lit room on the third floor.\nAlex C lurks in the corner.')
}
classRoom.alexCaffinated = false;
classRoom.lectureNoCoffee = () => {
  console.log('Alex mumbles "Agypetdrstes flitreudfgf."\nYou back away slowly')
};
classRoom.lectureHasCoffee = () => {
  console.log('Alex delivers a cogent lecture.\nAfter several hours your belly grumbles loudly')
}

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
function moveToRoom(newRoom) {
  if (validTransition.includes(newRoom)) {
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

console.log(currentRoom);
enterRoom(mrMikes);
console.log(currentRoom)
