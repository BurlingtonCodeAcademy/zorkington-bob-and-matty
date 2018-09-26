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

let mainStreet = {
  
}