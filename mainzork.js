class Room {
  constructor() {
    this.roomInventory = []
  }
};

const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};

const playerInventory = [];

const mainSt = new Room();
mainSt.description = () => {
  console.log("You are standing on Main St.\nIn front of you is a door with a keypad.\nThere is a sign beside the door.\nNext door is the coffee shop, Muddy Waters.\nDown the street is Mr. Mike's pizza")};
mainSt.sign = () => {
  console.log('Welcome to the Burlington Code Academy.\nthe door code is 12345')};

const mrMikes = new Room();
mrMikes.description = () => {
  console.log("You are in Mr. Mike's.\nYou are surrounded by the delicious fragrance of cooking pizza.")
};
mrMikes.pizza = () => {
  console.log('You buy some tasty pizza');
  playerInventory.push('pizza')
};

const muddyWaters = new Room();
muddyWaters.description = () => {
  console.log('You bang your head on the ceiling in the dungeon-like confines of Muddy Waters.\nThe coffee shop hums with activity')};
muddyWaters.coffee = () => {
  console.log('You buy some piping hot coffee');
  playerInventory.push('coffee')
};

const foyer = new Room();
foyer.isLocked = true;
foyer.description = () => {
  console.log('You are standing in a foyer.\nIn the corner is a pile of newspapers.\nThere are stairs leading up.')
};
foyer.takePaper = () => {
  playerInventory.push('newspaper')
  console.log('You pick up a newspaper')
};
foyer.unlock = () => {
  foyer.isLocked = false
};

const classRoom = new Room();
classRoom.description = () => {
  console.log('You are in a well lit room on the third floor.\nAlex lurks in the corner.')
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
  classRoom.alexCaffinated = true
};

function enterRoom(room) {
  room.description();
};

//this is where the body of the game starts, everything above is framework

async function startGame() {
  let init = await ask('Welcome to our world. Please do not use punctuation. Are you prepared? ')
  if (init.toLowerCase() === 'yes' || userIn.toLowerCase() === 'yup' || userIn.toLowerCase() === 'y' || userIn.toLowerCase() === 'yeah') {
    mainStart();
  }
  else {console.log("Let's try that again...");
  startGame()};
};

async function mainStart() {
  enterRoom(mainSt);
  let userIn = await ask('>_ ')
  if (userIn.toLowerCase() === 'read sign' || userIn.toLowerCase() === 'examine sign' || userIn.toLowerCase() === 'look at sign') {
    mainSt.sign();
    console.log('\n')
    mainStart();
  }
  else if (userIn.toLowerCase() === 'take sign' || userIn.toLowerCase() === 'pick up sign') {
    console.log("The sign is securely bolted to the wall.");
    console.log('\n')
    mainStart()
  }
  else if (userIn.toLowerCase() === 'open door' || userIn.toLowerCase() === 'enter door' || userIn.toLowerCase() === 'enter' && foyer.isLocked === true) {
    console.log('The door is locked.');
    console.log('\n')
    mainStart();
  }
  else if (userIn.toLowerCase() === 'open door' || userIn.toLowerCase() === 'enter door' || userIn.toLowerCase() === 'enter' && foyer.isLocked === false) {
    console.log('You step through the door.')
    console.log('\n')
    foyerStart();
  }
  else if (userIn.toLowerCase() === 'unlock door' || userIn.toLowerCase() === 'examine keypad' || userIn.toLowerCase() === 'unlock') {
    let keypad = await ask('The keypad has 0-9 on it.\nWhat would you like to punch in?');
    if (keypad === '12345') {
      foyer.unlock();
      console.log('The door unlocks with a faint *click*');
      console.log('\n')
      mainStart()
    }
    else {
      console.log('bzzzzt...wrong code.');
      console.log('\n')
      mainStart();
    }
  }
  else if (userIn.toLowerCase() === 'go to mr mikes' || userIn.toLowerCase() === "go to mr mike's" || userIn.toLowerCase() === 'go to pizza'  || userIn.toLowerCase() === 'enter mr mikes' || userIn.toLowerCase() === "enter mr mike's") {
    console.log('\n')
    mrMikesStart();
  }
  else if (userIn.toLowerCase() === 'go to muddy waters' || userIn.toLowerCase() === 'enter muddy waters') {
    console.log('\n')
    muddyStart();
  }
  else if (userIn.toLowerCase() === 'exit'){
    let confirmExit = await ask("Are you sure you'd like to quit (Y/N)? ");
    if (confirmExit.toLowerCase() === 'n'){
      console.log('\n')
      mainStart();
    }
    else if (confirmExit.toLowerCase() === 'y') {
      process.exit();
    }
    else {
      console.log('Invalid input...');
      console.log('\n')
      mainStart();
    }
  }
  else {console.log('Invalid input...');
  console.log('\n')
  mainStart();
  }
};

async function mrMikesStart() {
  enterRoom(mrMikes);
  let userIn = await ask('>_ ');
  if (userIn.toLowerCase() === 'exit' || userIn.toLowerCase() === 'leave' || userIn.toLowerCase() === 'go back') {
    console.log('\n')
    mainStart();
  }
  else if (userIn.toLowerCase() === 'get pizza' || userIn.toLowerCase() === 'buy pizza') {
    mrMikes.pizza();
    console.log('\n')
    mrMikesStart();
  }
  else {
    console.log('Invalid input...');
    console.log('\n')
    mrMikesStart();
  }
};

async function muddyStart() {
  enterRoom(muddyWaters);
  let userIn = await ask('>_ ');
  if (userIn.toLowerCase() === 'exit' || userIn.toLowerCase() === 'leave' || userIn.toLowerCase() === 'go back') {
    console.log('\n')
    mainStart();
  }
  else if (userIn.toLowerCase() === 'buy coffee' || userIn.toLowerCase() === 'get coffee') {
    muddyWaters.coffee();
    console.log('\n')
    muddyStart();
  }
  else {
    console.log('Invalid input.');
    console.log('\n')
    muddyStart();
  }
};

async function foyerStart() {
  enterRoom(foyer);
  let userIn = await ask('>_ ');
  if (userIn.toLowerCase() === 'exit' || userIn.toLowerCase() === 'leave' || userIn.toLowerCase() === 'go back') {
    console.log('\n')
    mainStart();
  }
  else if (userIn.toLowerCase() === 'go upstairs' || userIn.toLowerCase() === 'go up' || userIn.toLowerCase() === 'ascend') {
    console.log('\n')
    classStart();
  }
  else if (userIn.toLowerCase() === 'take paper' || userIn.toLowerCase() === 'pick up paper' || userIn.toLowerCase() === 'take newspaper' || userIn.toLowerCase() === 'pick up newspaper') {
    foyer.takePaper();
    console.log('\n')
    foyerStart();
  }
  else if (userIn.toLowerCase() === 'read paper' || userIn.toLowerCase() === 'examine paper' || userIn.toLowerCase() === 'read newspaper' || userIn.toLowerCase() === 'examine newspaper' || userIn.toLowerCase() === 'examine newspapers' || userIn.toLowerCase() === 'read newspapers') {
    console.log('You flip through the paper.\nWhile there are some interesting articles nothing is relevent to your quest.\nYou put the paper back on the pile');
    console.log('\n')
    foyerStart();
  }
  else {
    console.log('Invalid input...');
    console.log('\n')
    foyerStart();
  }
};

async function classStart() {
  enterRoom(classRoom);
  let userIn = await ask('>_ ');
  if (userIn.toLowerCase() === 'exit' || userIn.toLowerCase() === 'leave' || userIn.toLowerCase() === 'go back' || userIn.toLowerCase() === 'go down') {
    console.log('\n')
    foyerStart();
  }
  else if (userIn.toLowerCase() === 'talk to alex' || userIn.toLowerCase() === 'talk'|| userIn.toLowerCase() === 'attend lecture' && classRoom.alexCaffinated === false) {
    classRoom.lectureNoCoffee();
    console.log('\n')
    classStart();
  }
  else if (userIn.toLowerCase() === 'talk to alex' || userIn.toLowerCase() === 'talk' || userIn.toLowerCase() === 'attend lecture' && classRoom.alexCaffinated === true) {
  classRoom.lectureHasCoffee();
  console.log('\n')
  classStart();
  }
  else if (userIn.toLowerCase() === 'give coffee' || userIn.toLowerCase() === 'give alex coffee' && playerInventory.includes('coffee') === true) {
    classRoom.giveCoffee();
    console.log('Alex thanks you for the coffee.\nMaybe now he will be a little more inteligible...');
    console.log('\n')
    classStart();
  }
  else if (userIn.toLowerCase() === 'give coffee' || userIn.toLowerCase() === 'give alex coffee' && playerInventory.includes('coffee') === false) {
    console.log('You have no coffee to give...');
    console.log('\n')
    classStart()
  }
  else {
    console.log('Invalid input...');
    console.log('\n')
    classStart();
  }
};

startGame();

//make action and rule methods or arrays for room constructer, then pass in rules

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