//background gradient
const Y_AXIS = 1;
let c1, c2;

//number of data being displayed
let itemNum = 400;


let BOROUGH = [];
let DEVICE_TYPE = [];
let FLOOR_TO = [];
let VELOCITY = [];
let CAPACITY = [];

let x;
let y;

let xInterval;
let yCoords = [];
let capacity = [];

let rectangles = [];

let vy = [];

let r;
let g;
let b;

function preload() {
  url = "elevator_data.json"
  data = loadJSON(url);
}

function setup() {
  createCanvas(5230, windowHeight);
  background(200,200,200);
  c1 = color(200, 200, 200);
  c2 = color(12, 12, 12);

  for (let i = 0; i < itemNum; i++) {
    BOROUGH[i] = data[i].BOROUGH;
    DEVICE_TYPE[i] = data[i].DEVICE_TYPE;
    FLOOR_TO[i] = data[i].FLOOR_TO;
    VELOCITY[i] = data[i].SPEED;
    CAPACITY[i] = data[i].CAPACITY;

    capacity[i] = CAPACITY[i] / 60; //height of rectangles
    yCoords[i] = map(FLOOR_TO[i], 65, 1, 20, windowHeight-100 ) - capacity[i]; //starting point of rectangles

    vy[i] = VELOCITY[i] / 300; //speed of moving rectangles

  }

}

function windowResized() {
  resizeCanvas(5230, windowHeight);
  background(200,200,200);
}

function draw() {

  // background(200,200,200);
  
  let w = 13;
  let xInterval = w;
  

  
//     for (let i = 1; i < itemNum; i = i + 2) {
//     setGradient((i + 1) * xInterval, 50, (windowWidth - 50) / 150, windowHeight - 150, c1, c2, Y_AXIS);
//   }

//   for (let i = 0; i < itemNum; i = i + 2) {
//     noStroke();
//     fill(200, 200, 200);
//     rect((i + 1) * xInterval, 50, (windowWidth - 50) / 150, windowHeight - 150)
//   }


  for (let i = 0; i < itemNum; i++) {
    


    y = yCoords[i];
    

    


     
    rectMode(CORNER)
    rectangles[i] = new Rectangle(x, y, w, capacity[i]); // Create a new Rectangle object and store it in the array
    
     if (BOROUGH[i] == "Manhattan"){
      fill(111,115,218)}

    else if (BOROUGH[i] == "Queens"){
      fill(77,204,232)}

    else if (BOROUGH[i] == "Brooklyn"){
      fill(212, 97, 61);}

    else if (BOROUGH[i] == "Staten Island"){
          fill(237,189,65)}

    else if (BOROUGH[i] == "Bronx"){
      fill(98, 219, 117)}

    rectangles[i].display(); // Call the display() function of the Rectangle object
    
    yCoords[i] = yCoords[i] - vy[i];
    

  if (yCoords[i]+capacity[i]>= windowHeight-120 || yCoords[i] <= 20 ) {
    vy[i] = -vy[i];
  }
    
    
    x = (i + 1) * xInterval; 

             if (mouseX >= x-w && mouseX <= x ){
          
        noStroke()
      rectMode(CENTER)
      fill(200,200,200)
      rect(x, windowHeight-50, 5300, 100)
      // 
        if (BOROUGH[i] == "Manhattan"){
      fill(111,115,218)}

    else if (BOROUGH[i] == "Queens"){
      fill(77,204,232)}

    else if (BOROUGH[i] == "Brooklyn"){
      fill(212, 97, 61);}

    else if (BOROUGH[i] == "Staten Island"){
          fill(237,189,65)}

    else if (BOROUGH[i] == "Bronx"){
      fill(98, 219, 117)}
      rect(x, windowHeight-50, 200, 80, 10)
          
          
      textAlign(LEFT)
      textSize(13);
      fill('black')
      textStyle(BOLD);
      text("BOROUGH : " + BOROUGH[i-1],x-70,windowHeight-65)
      textStyle(NORMAL);
      text("SPEED : " + VELOCITY[i-1] + " fpm",x-70,windowHeight-45)
      text("CAPACITY: " + CAPACITY[i-1] + " lbs",x-70,windowHeight-25)
      
      }
  }
    
    
  }
  
  
 


class Rectangle {
  constructor(x,y,w,h,vy,r,g,b){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vy = vy;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  
  display(){
    stroke(60)
    rect(this.x, this.y, this.w, this.h);
    this.y = this.y - this.vy;
  }
  
}



// function mousePressed(){
//   for (let i = 0; i < itemNum; i++){
// textAlign(CENTER,CENTER)
// textSize(20);
// fill('black')
// text(BOROUGH[i], windowWidth/2, windowHeight-5);
//   }
// }


