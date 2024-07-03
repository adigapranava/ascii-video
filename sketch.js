const density = "Ñ@#W$9876543210?!abc;:+=-,._             ";

let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let img;

function preload(){
  // img = loadImage('dog30_25.jpg');
  video = createCapture(VIDEO);
  video.size(48,48);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  // image(img, 0, 0, width, height);
  
  let w = width / video.width;
  let h = height / video.height;
  video.loadPixels();
  
  for(let i=0;i<video.width;i++){
    for(let j=0;j<video.height;j++){
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0]
      const g = video.pixels[pixelIndex + 1]
      const b = video.pixels[pixelIndex + 2]
      const c = (r+g+b)/3;
      
      noStroke();
      // if(c>200){
        // fill(r-c,g-c,b-c);
        // square(i*w,j*h, w);
      // }else{
        const charIndex = density.length- floor(map(c, 0, 255, 0, density.length));
        fill(255);
        textSize(w);
      // text(chars.charAt(floor(random(chars.length))), i * w + w, j * h);
      text(density.charAt(charIndex), i * w + w, j * h);
      textAlign(CENTER, CENTER);  
      // }
          
      // square(i*w,j*h, w);
    }
  }
  
  
}