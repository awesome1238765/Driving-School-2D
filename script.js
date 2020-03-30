let wasdCommand = true
let arrowCommand = false
let b1
let carX = 200
let carY = 200
let inp1
let s1
function setup() {
  createCanvas(400, 400)
  rect(carX, carY, 15, 15)
  b1 = createButton("Change the controls")
  b1.mousePressed(changeControls)
  inp1 = createColorPicker("Put In A Certain Color For Shape")
  setMidShade();
  s1 = createSlider(1,100,1)
}
function draw() {
  background(0)
  rect(carX, carY, 15, 15)
  fill(inp1.value())
}
function keyTyped() {
  if (wasdCommand == true) {
    let speed1 = s1.value()
    if (key === 'd') {
      carX = carX + speed1
      rect(carX, carY, 15, 15)
    } else if (key === 'a') {
      carX = carX + -speed1
      rect(carX, carY, 15, 15)
    } else if (key === 's') {
      carY = carY + speed1
      rect(carX, carY, 15, 15)
    } else if (key === 'w') {
      carY = carY + -speed1
      rect(carX, carY, 15, 15)
    }
  }
}
function keyPressed() {
  if (arrowCommand == true) {
    let speed2 = s1.value()
    if (keyCode === LEFT_ARROW) {
      carX = carX + -speed2
      rect(carX, carY, 15, 15)
    }else if (keyCode === RIGHT_ARROW){
      carX = carX + speed2
    }else if(keyCode === UP_ARROW){
      carY = carY + -speed2
      rect(carX, carY, 15, 15)
    }else if(keyCode === DOWN_ARROW){
      carY = carY + speed2
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
}