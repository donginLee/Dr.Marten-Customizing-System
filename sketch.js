
let shoe;


let select_l, select_r, select_l2, select_r2, select_m;
let slider_l, slider_r, slider_l2, slider_r2;

let n1=0;
let n2=0;

let ready=1;

let render, render_left, render_right;

let fonttype=[];
let whichfont;
let whichletter;
let button;


//let txt_appear = [0,0,0,0,0,0,0,0,0,0];
let txt_x = 0;
let txt_y = -100;
let txt_size = 20;
let txt_theta = 0;
let txt_font;
let txt_rotate = 0;


let txt_string=[];

let txt_num = 0;

let pickcolor_l = 1;
let pickcolor_r = 1;

let pattern_num=1; // 1(패턴1), 2(패턴2) or 3(단색)

let l=[]; // 캔버스 (createGraphics)
let m=[]; // 색깔 모드

let col;

let street;
let chanel;
let signature;
let submit=false;
function preload(){
  shoe=loadImage('shoes.png');
  
  street=loadFont('font1.otf');
  chanel=loadFont('font2.otf');
  signature=loadFont('font3.ttf');
}

function setup() {
  createCanvas(650,800);
  
  select_m = createColorPicker('ffffff');
  select_m.position(270,8);
  
  l[1] = createGraphics(650, 800);// shoe
  l[2] = createGraphics(650, 800); // cover
  l[3]= createGraphics(220, 320);//left pattern
  l[4]= createGraphics(350,150); //right pattern
  l[5] = createGraphics(650, 800); // mid cover
  l[6] = createGraphics(650,190); // 글자 예시
  l[7] = createGraphics(650, 165);
  
  m[1] = ["#0060ff", "#ff004e", "#813aa9", "#56ac51", "#ffcc00", "#ffffff"]; // vivid
  m[2] = ["#d5ac7e", "#e4cfb4", "#9d503e", "#b78048", "#c3765a", "#f2f1ed"]; // warm
  m[3] = ["#6493ad", "#72acae", "#b4dadb", "#d8a3d1", "#d1d3e2", "#b2afcc"]; // cool
  m[4] = ["#042f28", "#2c332b", "#3f0d16", "#a49484", "#bc7837", "#674742"]; // dark
  m[5] = ["#d6e0ea", "#f7e9e8", "#f6e4b4", "#c9e2c2", "#fad4af", "#fdafab"]; // pastel
  
  //pickcolor=random(5);
  
  for(i=1;i<=5;i++) shuffle(m[i], true);
  
  select_l2 = createSelect();
  select_l2.position(10,10);
  select_l2.option('1: pattern1');
  select_l2.option('2: pattern2');
  select_l2.option('3: pattern3');
  select_l2.option('4: solid');
  
  select_r2 = createSelect();
  select_r2.position(415, 10);
  select_r2.option('1: pattern1');
  select_r2.option('2: pattern2');
  select_r2.option('3: pattern3');
  select_r2.option('4: solid');
  
  select_l = createSelect();
  select_l.position(100,10);
  select_l.option('1: vivid');
  select_l.option('2: warm');
  select_l.option('3: cool');
  select_l.option('4: dark');
  select_l.option('5: pastel');
  select_r = createSelect();
  select_r.position(505, 10);
  select_r.option('1: vivid');
  select_r.option('2: warm');
  select_r.option('3: cool');
  select_r.option('4: dark');
  select_r.option('5: pastel');
  
  slider_l=createSlider(2,10,5,0.1);
  slider_l.position(10,30);
  slider_l.size(80);
  
  slider_l2=createSlider(2,10,5,1);
  slider_l2.position(95,30);
  slider_l2.size(80);
  
  slider_r=createSlider(2,10,5,1);
  slider_r.position(415,30);
  slider_r.size(80);
  
  slider_r2=createSlider(2,10,5,0.1);
  slider_r2.position(500,30);
  slider_r2.size(80);
  
  
  whichfont=createSelect();
  whichfont.position(564,86);
  whichfont.option('1:street');
  whichfont.option('2:signature');
  
  whichletter=createInput('hello');
  whichletter.position(470,62);
  whichletter.input(stop);
  button = createButton('submit');
  button.position(590,62);
  button.mousePressed(choosetext);


  
  
 
  
  render_left = createButton('render');
  render_left.position(180,9)
  render_left.mousePressed(render2);
  
  render_right = createButton('render');
  render_right.position(585,9)
  render_right.mousePressed(render1);
  
  render_mid = createButton('render');
  render_mid.position(330, 10);
  render_mid.mousePressed(render3);
  
  layer_shoe();
  
  white=color(255);
  
  txt_theta = (1/(2*PI));
  l[6].translate(l[6].width/2, l[6].height/2);
  l[6].textAlign(CENTER,CENTER);
  
  fonttype=[street,signature];

}
function stop(){
  if(submit)submit=false;
}

function draw() {

  letter();
  backcolor1();
   backcolor2();
  rnder=0;
  
}

function renderAll(){
  doctormartin();
}

function render1(){
  doctormartin(2);
}

function render2(){
  doctormartin(1);
}

function render3(){
  doctormartin(100);
}

function doctormartin(a=0)
{
  if(a==0||a==1){
    pickcolor_l = int(select_l.value()[0]);
    layer_left(int(select_l2.value()[0]));
  }
  if(a==0||a==2){
    pickcolor_r = int(select_r.value()[0]);
    layer_right(int(select_r2.value()[0]));
  }
  layer_cover();
  layer_mid(select_m.color());
  layer_shoe();
  letter();
}

// 
function layer_shoe(){
  image(shoe,0,0);
}

// 패턴을 넣는 레이어
function layer_cover(){
  push();
  l[1].noStroke();
  l[1].fill(255);
  //왼
  l[1].beginShape();
  l[1].vertex(87, 0);
  l[1].vertex(87, 358);
  l[1].vertex(81, 425);
  l[1].vertex(40, 611);
  l[1].vertex(201, 633);
  l[1].vertex(202, 585);
  l[1].vertex(202, height);
  l[1].vertex(0, height);
  l[1].vertex(0, 0);
  l[1].endShape(CLOSE); 
  l[1].beginShape();
  l[1].vertex(202, height);
  l[1].vertex(202, 585);
  l[1].vertex(99, 512);
  l[1].vertex(87, 477);
  l[1].vertex(96, 412);
  l[1].vertex(87, 350);
  l[1].vertex(87, 0);
  l[1].vertex(239, 0);
  l[1].vertex(239, height);
  l[1].endShape(CLOSE);
  //오
  l[1].beginShape();
  l[1].vertex(239, 0);
  l[1].vertex(239, height);
  l[1].vertex(width, height);
  l[1].vertex(width, 620);
  l[1].vertex(599, 620);
  l[1].vertex(514, 642);
  l[1].vertex(403, 657);
  l[1].vertex(261, 640);
  l[1].vertex(293, 616);
  l[1].vertex(331, 605);
  l[1].vertex(412, 601);
  l[1].vertex(418, 578);
  l[1].vertex(400, 519);
  l[1].vertex(459, 557);
  l[1].vertex(559, 572);
  l[1].vertex(588, 588);
  l[1].vertex(600, 620);
  l[1].vertex(width, 620);
  l[1].vertex(width, 0);
  l[1].endShape(CLOSE)
  image(l[1],0,0);
  pop();
}

function layer_left(a){
  pattern(3, a);
  //print('layer_left');
}

function layer_right(a){
  pattern(4, a);
  //print('layer_right')
}

function layer_mid(a){
  push();
  l[5].noStroke();
  l[5].fill(a);
  //중간
  l[5].beginShape();
  l[5].vertex(74, 262);
  l[5].vertex(96, 390);
  l[5].vertex(88, 471);
  l[5].vertex(96, 508);
  l[5].vertex(200, 582);
  l[5].vertex(204, 635);
  l[5].vertex(259, 642);
  l[5].vertex(291, 615);
  l[5].vertex(354, 600);
  l[5].vertex(411, 600);
  l[5].vertex(417, 579);
  l[5].vertex(401, 517);
  l[5].vertex(389, 513);
  l[5].vertex(328, 478);
  l[5].vertex(293, 445);
  l[5].vertex(278, 408);
  l[5].vertex(264, 266);
  l[5].endShape(CLOSE);
  image(l[5], 0, 0);
  pop();
}

function pattern(a, b){
  this.a=a;
  if (this.a == 3) l[this.a].background(m[int(select_l.value()[0])][n1]);
  else if (this.a == 4) l[this.a].background(m[int(select_r.value()[0])][n2]);
  if(b==1){
    push();
    if(this.a == 3) l[this.a].fill(255, map(slider_l2.value(),2,10,0,255));
    else if(this.a == 4) l[this.a].fill(255, map(slider_r2.value(),2,10,0,255));
    l[this.a].rect(0,0,width,height);
    pop();
    let c = 300;
    let w = (l[this.a].width * 2) / c;
    let offset = 5;
    for (let i = 0; i < c; i++) {
      for (let j = 0; j < c; j++) {
        let x = i * w + (w / 2) - (l[this.a].width / 2);
        let y = j * w + (w / 2) - (l[this.a].width / 2);
        let angle = noise(x * 0.001, y * 0.001) * 200;
        let num1 = map(noise(x * 0.001, y * 0.001), 0, 1, -2, 8);
        let size;
        if(this.a==3)
        {size = random(slider_l.value());}
        if(this.a==4)
        {size = random(slider_r.value());}
        // 크기 바꾸는 변수 넣을 수 있는 부분
        
        if(this.a == 3) col = random(m[pickcolor_l]);
        else if(this.a == 4) col = random(m[pickcolor_r]);
        
        l[this.a].push();
        l[this.a].translate(x, y);
        l[this.a].rotate(angle);
        l[this.a].noStroke();
        l[this.a].fill(col);
        l[this.a].triangle(offset, 2, 6, size*4, size*3, size*4);
        l[this.a].pop();
      }
    }
  }
  else if(b==2){
    let p;
    if(this.a == 3) col = random(m[pickcolor_l]);
    else if(this.a == 4) col = random(m[pickcolor_r]);
    push();
    //l[this.a].background(col)
    if(this.a == 3) l[this.a].fill(255, map(slider_l2.value(),2,10,0,255));
    else if(this.a == 4) l[this.a].fill(255, map(slider_r2.value(),2,10,0,255));
    l[this.a].rect(0,0,width,height);
    pop();
    l[this.a].noStroke();
    if (this.a==3) p = map(slider_l.value(),2,10,20,60);
    else if (this.a == 4) p = map(slider_r.value(),2,10,20,60);
    for(let i = 0; i < l[this.a].width; i += p) {
      if(this.a == 3) col = random(m[pickcolor_l]);
      else if(this.a == 4) col = random(m[pickcolor_r]);
	  l[this.a].fill(col);
      l[this.a].rect(0, i + 5, width, 3);
	  l[this.a].fill(col);
      l[this.a].rect(i + 5, 0, 3, height);
      for(let j = 0; j < height; j += p) {
        pattern2(i, j, this.a, p);
      }
    } 
  }
  else if(b==4){
    if(this.a == 3) col = random(m[pickcolor_l]);
    else if(this.a == 4) col = random(m[pickcolor_r]);
    l[this.a].push();
    //l[this.a].background(col);
    l[this.a].pop(); 
  }
  
  else if(b==3){
    push();
    if(this.a == 3) l[this.a].fill(255, map(slider_l2.value(),2,10,0,255));
    else if(this.a == 4) l[this.a].fill(255, map(slider_r2.value(),2,10,0,255));
    l[this.a].rect(0,0,width,height);
    pop();
    if(this.a == 3) col = random(m[pickcolor_l]);
    else if(this.a == 4) col = random(m[pickcolor_r]);
    
    h(1000, this.a, col);

	for (let j = 0; j < 100; j++) {
		let x = random(-0.1, 1.2) * width;
		let y = random(-0.1, 1.2) * height;
		let d = random(10, 100);
		if(this.a == 3) col = random(m[pickcolor_l]);
        else if(this.a == 4) col = random(m[pickcolor_r]);
		let cc = int(random(1, 10));
		l[this.a].noiseSeed(int(random(1000)));
		l[this.a].stroke(col);
		for (let i = 0; i < cc; i++) {
			let a = random(TAU);
			noiseCurve(x + d * 0.3 * cos(a), y + d * 0.3 * sin(a), d * 0.01, this.a);
		}
		l[this.a].noStroke();
		l[this.a].fill(col);
		l[this.a].ellipse(x, y, d/2, d/2);
		
		if(random(1) < 0.5){
			l[this.a].strokeWeight(1);
			l[this.a].stroke(0);
			l[this.a].noFill();
			l[this.a].ellipse(x + random(-1, 1) * d * 0.05, y + random(-1, 1) * d * 0.05, d/2, d/2);
		}
	}
	h(1000, this.a, col); 
  }
  if(this.a == 3) image(l[this.a], 40, 350);
  else if(this.a == 4) image(l[this.a], 260, 520);
  

}
function pattern2(x, y, a) {
  this.a = a;
  //white
  l[this.a].fill(255, 255, 255, 55);
  l[this.a].rect(x + 10, y + 37, 75, 7);
  l[this.a].rect(x + 10, y + 53, 75, 7);
  l[this.a].rect(x + 37, y + 10, 7, 75);
  l[this.a].rect(x + 53, y + 10, 7, 75);
  
  //black
  l[this.a].fill(0, 0, 0, 75);
  for(let i = 0; i < 3; i++) {
    var diff = (20 + (15 * i));
    l[this.a].rect(x + diff, y, 7, 60);
    l[this.a].rect(x, y + diff, 60, 7);
  }  
}

function noiseCurve(x, y, sw, a) {
	let c = 500;
	let px = x;
	let py = y;
	for (let i = 0; i < c; i++) {
		let scl = 0.0004;
		let angle = noise(x * scl, y * scl, i * 0.0003) * 50;
		// let w = map(i, 0, c - 1, 1, 0);
		let w;
      if(this.a==3)
      w= map(slider_l.value(),2,10,1,50);
      if(this.a==4)
      w= map(slider_r.value(),2,10,1,50);
		l[a].strokeWeight(w);
		l[a].line(x, y, px, py);
		px = x;
		py = y;
		x += cos(angle) * 2;
		y += sin(angle) * 2;
	}
}

function h(num, a, b){
	l[a].noStroke();
	for(let i=0; i<num; i++){
		l[a].fill(b);
		l[a].circle(random(width), random(height), random(random(random(10))));
	}
}

function keyPressed() {
  if(submit){
  if (keyCode === LEFT_ARROW) {
    l[6].rotate(-txt_theta);
    txt_rotate -= 1;
  } else if (keyCode === DOWN_ARROW) {
    txt_size -= 3;
    if(txt_size < 0) txt_size = 1;
  } else if (keyCode === RIGHT_ARROW) {
    l[6].rotate(txt_theta);
    txt_rotate += 1;
  } else if (keyCode === UP_ARROW) {
    txt_size += 3;
  } else if (keyCode === ENTER) {
    save('shoe1.jpg');
  }
  else if(key=='s'){
    save('shoe1.jpg');
  }
  return false;} // prevent default}
}

function mousePressed(){
  if((mouseX > 580) && (mouseX < 620) && (mouseY > 180) && (mouseY < 220)){
    
    
  }
  if((mouseX<205)&&(mouseX>185)&&(mouseY>36)&&(mouseY<46)){
  n1++;
  if(n1==6) n1=0;
 }
 else if((mouseX<610)&&(mouseX>590)&&(mouseY>36)&&(mouseY<46)){
  n2++;
  if(n2==6)n2=0;
 } 
  
  if(mouseY>600){
    txt_x = mouseX;  
    txt_y = mouseY - 600;
    txt_font = fonttype[whichfont.value()[0]-1]
    //l[7].background(0);
    for(i=0;i<10; i++){
      l[7].push();
      l[7].textSize(txt_size);
      l[7].translate(txt_x, txt_y); 
      l[7].fill(255,255);
      l[7].rotate(txt_theta * txt_rotate);
      l[7].textFont(txt_font);
      l[7].textAlign(CENTER,CENTER); 
      l[7].noStroke();
      l[7].text(whichletter.value(),0,0);
      l[7].pop();  
    }
    image(l[7],0,600);
  }
}
function letter(){
  l[6].background(0);
  l[6].fill(255);
  l[6].stroke(255);
  l[6].textSize(txt_size);
  //l[6].rotate(txt_theta[txt_num]);
  l[6].textFont(fonttype[whichfont.value()[0]-1]);
  l[6].text(whichletter.value(),0,0);
  image(l[6],0,55);
  
  
  //l[7].background(0);
  //image(l[7],0,600);
}


function choosetext(){
  txt_string = whichletter.value();
  submit=true;
}

function backcolor1(){
  fill(m[int(select_l.value()[0])][n1]);
  stroke(180);
  rect(185,36,20,10);
}

function backcolor2(){
  fill(m[int(select_r.value()[0])][n2]);
  stroke(180);
  rect(590,36,20,10);
}