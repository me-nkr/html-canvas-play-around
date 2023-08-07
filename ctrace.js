/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

canvas.width = window.outerWidth * 0.9;
canvas.height = canvas.width * 0.7

let w = canvas.width;
let h = canvas.height;

const ctx = canvas.getContext('2d');

const hippo = new Image();
hippo.src = "https://t7.leapfrog.com/images/lp-content-img/Printable-Preview_Trace-Hippo.jpg";

hippo.onload = () => {
  ctx.globalAlpha = 1;
  ctx.drawImage(hippo, 0, 0, w, h);
  ctx.globalAlpha = 1;

  // start trace
  ctx.beginPath();
  
  // ear (up)
  ctx.moveTo(w/2-20, h/2-315);
  ctx.bezierCurveTo(w/2-40, h/2-410, w/2+65, h/2-420, w/2+35, h/2-320);
  
  // head
  ctx.moveTo(w/2-110, h/2-230);
  ctx.quadraticCurveTo(w/2+10, h/2-405, w/2+130, h/2-240);
  
  // ear 
  ctx.moveTo(w/2+120, h/2-220);
  ctx.arc(w/2+160, h/2-200, 45, -Math.E, 2.2);

  // face right
  ctx.moveTo(w/2+140, h/2-160);
  ctx.quadraticCurveTo(w/2+140, h/2-60, w/2+85, h/2+15);

  // back
  ctx.moveTo(w/2+85, h/2+25);
  ctx.bezierCurveTo(w/2+75, h/2+120, w/2+155, h/2+160, w/2+150, h/2+175);

  // tail
  ctx.moveTo(w/2+150, h/2+175);
  ctx.quadraticCurveTo(w/2+160, h/2+180, w/2+195, h/2+165);
  ctx.quadraticCurveTo(w/2+210, h/2+230, w/2+160, h/2+250);

  // bum
  ctx.quadraticCurveTo(w/2+150, h/2+290, w/2+135, h/2+310);

  // leg (right)
  ctx.bezierCurveTo(w/2+180, h/2+425, w/2, h/2+400, w/2+20, h/2+355);

  // leg (left)
  ctx.moveTo(w/2+10, h/2+350);
  ctx.quadraticCurveTo(w/2-95, h/2+395, w/2-95, h/2+295)

  // belly
  ctx.moveTo(w/2-98, h/2+285);
  ctx.quadraticCurveTo(w/2-130, h/2+245, w/2-135, h/2+215)
  
  // hand
  ctx.moveTo(w/2-140, h/2+210);
  ctx.quadraticCurveTo(w/2-210, h/2+150, w/2-130, h/2+45)
  
  // mouth
  ctx.moveTo(w/2-125, h/2+35);
  ctx.lineTo(w/2-135, h/2+15);
  ctx.moveTo(w/2-140, h/2+12);
  ctx.quadraticCurveTo(w/2-190, h/2+10, w/2-185, h/2-40)

  // cheek
  ctx.moveTo(w/2-185, h/2-45);
  ctx.bezierCurveTo(w/2-210, h/2-60, w/2-260, h/2-240, w/2-110, h/2-230)

  ctx.lineWidth = 5;
  ctx.stroke();
}
