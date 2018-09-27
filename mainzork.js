class Room {
  constructor() {
    this.roomInventory = []
  }
}

const playerInventory = [];

const mainSt = new Room();
mainSt.description = () => {
  console.log('You are standing on Main St.\nIn front of you is a door with a keypad.\nthere is a sign beside the door')};
mainSt.sign = () => {
  console.log('Welcome to the Burlington Code Academy.\nthe door code is 12345')};
mainSt.unlock = () => {
  foyer.isLocked = false
}

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
  console.log('You buy some piping hot coffee');
  playerInventory.push('coffee')
}

const foyer = new Room();
foyer.isLocked = true;
foyer.description = () => {
  console.log('You are standing in a foyer.\nIn the corner is a pile of newspapers.')
};
foyer.takePaper = () => {
  playerInventory.push('newspaper')
  console.log('You pick up a newspaper')
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
  playerInventory.push('knowledge')
};
classRoom.giveCoffee = () => {
  alexCaffinated = true
};

const rooms = [mainSt, mrMikes, muddyWaters, foyer, classRoom];

state = {
  mainSt: {canChangeTo: [foyer, mrMikes, muddyWaters]},
  mrMikes: {canChangeTo: [mainSt]},
  muddyWaters: {canChangeTo: [mainSt]},
  foyer: {canChangeTo: [mainSt, classRoom]},
  classRoom: {canChangeTo: [foyer]}

};


let currentRoom = state.mainSt;

function enterRoom (nextRoom) {
  let validTransition = currentRoom.canChangeTo;
  if (validTransition.includes(nextRoom)) {
    nextRoom.description();
    currentRoom = state.nextRoom;  
  }
  else {
    throw 'invalid path from ' + currentRoom + ' to ' + nextRoom;
  }
}

/*Main St. if currentRoom === state.mainSt
if user reads sign mainSt.sign()
if user tries to go to foyer before unlock (foyer.isLocked=true) console.log the door is locked
if user unlocks the door -> mainSt.unlock(), now when they try to enter enterRoom(foyer)
go to Mr. Mikes
go to Muddy Waters

Mr. Mikes if currentRoom === state.mrMikes 
buy pizza -> mrMikes.pizza()
leave -> enterRoom(mainSt)

Muddy Waters if currentRoom === state.muddyWaters
buy coffee -> muddyWaters.coffee()
leave -> enterRoom(mainSt)

foyer if currentRoom === state.foyer
take paper -> foyer.takePaper()
go up -> enterRoom(classRoom)
exit -> enterRoom(mainSt)

Class Room if currentRoom === state.classRoom
talk to alex, listen to lecture, etc. if no coffee in inventory -> classRoom.lectureNoCoffee
if coffee in inventory allow classRoom.giveCoffee() else console.log Alex needs coffee,
then enable classRoom.lectureHasCoffee
exit enterRoom(foyer)

*/