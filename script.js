let wasdCommand = true
let arrowCommand = false
let b1
let speed = 1
let carX = 200
let carY = 200
let inp1
function setup() {
  createCanvas(400, 400)
  rect(carX, carY, 15, 15)
  b1 = createButton("Change the controls")
  b1.mousePressed(changeControls)
  inp1 = createColorPicker("Put In A Certain Color For Shape")
  setMidShade();
}
function draw() {
  background(0)
  rect(carX, carY, 15, 15)
  fill(inp1.value())
}
function keyTyped() {
  if (wasdCommand == true) {
    if (key === 'd') {
      carX = carX + speed
      rect(carX, carY, 15, 15)
    } else if (key === 'a') {
      carX = carX + -speed
      rect(carX, carY, 15, 15)
    } else if (key === 's') {
      carY = carY + speed
      rect(carX, carY, 15, 15)
    } else if (key === 'w') {
      carY = carY + -speed
      rect(carX, carY, 15, 15)
    }
  }
}
function keyPressed() {
  if (arrowCommand == true) {
    if (keyCode === LEFT_ARROW) {
      carX = carX + -1
      rect(carX, carY, 15, 15)
    }else if (keyCode === RIGHT_ARROW){
      carX = carX + 1
    }else if(keyCode === UP_ARROW){
      carY = carY + -1
      rect(carX, carY, 15, 15)
    }else if(keyCode === DOWN_ARROW){
      carY = carY + 1
      rect(carX, carY, 15, 15)
    }
  }
}
function changeControls(){
  if (wasdCommand === true){
    wasdCommand = false
    arrowCommand = true
  }else if(arrowCommand === true){
    wasdCommand = true
    arrowCommand = false
  }
}
function setMidShade() {
  // Finding a shade between the two
  let commonShade = lerpColor(inp1.color(), inp1.color(), 0.5);
  fill(commonShade)
}

function setShade1() {
  setMidShade();
  console.log('You are choosing shade 1 to be : ', this.value());
}