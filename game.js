var theDojo = [];
// theDojo =     [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
//                 [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
//                 [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
//                 [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
//                 [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
//                 [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
//                 [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
//                 [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
//                 [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
//                 [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];

let dojoDimensions = 10;

function generateDojoGrid(size) {
  let maxNinjas = Math.floor(size * 1.5);

  for (let row = 0; row < size; row++) {
    let tempRow = [];
    for (let rowElem = 0; rowElem < size; rowElem++) {
      let chance = Math.floor(Math.random()*size) + 1;
      if (chance <= 2 && maxNinjas > 0) {
        tempRow.push(1)
        maxNinjas--;
      }
      else {
        tempRow.push(0);
      }
    }
    theDojo.push(tempRow)
  }
  console.log("Ninjas not used:",maxNinjas)
}

var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    result += '<div>';
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
    result += '</div>';
  }
  return result;
}
    
function howMany(i, j, element) {
  if (theDojo[i][j] == 1) {
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
  }


  console.log({i, j});
  let sum = 0;

  for  (let row = i-1; row <= i+1; row++){
    if  (row < 0 || row >= theDojo.length) {
      continue;
    }

    for (let col = j-1; col <= j+1; col++) {
      if  (col < 0 || col >= theDojo[row].length || ( (row == i) && ( col == j) )) {
        continue
      }
      sum += theDojo[row][col];
    }
  }
  element.innerText = sum;
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
generateDojoGrid(dojoDimensions) // build randomized 2d array
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    