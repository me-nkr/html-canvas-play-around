/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

canvas.width = window.outerWidth * 0.9;
canvas.height = canvas.width * 0.7

let w = canvas.width;
let h = canvas.height;

const ctx = canvas.getContext('2d');

ctx.fillStyle = "rgba(0, 0, 0, 1)";

ctx.beginPath();
ctx.arc(w/2, h/2, 141.42136, 0, 2 * Math.PI, true);

ctx.moveTo(w/2-65, h/2-100);
ctx.arc(w/2-100, h/2-100, 35, 0, 2 * Math.PI, true);

ctx.moveTo(w/2+135, h/2+100);
ctx.arc(w/2+100, h/2+100, 35, 0, 2 * Math.PI, true);

ctx.fill();

ctx.clearRect(w/2-90, h/2-90, 180, 180);

ctx.beginPath();

ctx.moveTo(w/2+100, h/2-100)
ctx.lineTo(w/2+40, h/2-100);
ctx.arc(w/2+100, h/2-100, 60, Math.PI, 0.5 * Math.PI, true);

ctx.moveTo(w/2-100, h/2+100)
ctx.lineTo(w/2-40, h/2+100);
ctx.arc(w/2-100, h/2+100, 60, 0, 1.5 * Math.PI, true);

ctx.fill();

ctx.fillStyle = "rgba(96, 96, 96, 1)";

ctx.beginPath();
ctx.moveTo(w/2+90, h/2-90)
ctx.lineTo(w/2+50, h/2-90);
ctx.arcTo(w/2+50, h/2-50, w/2+90, h/2-50, 40);
ctx.fill()

ctx.beginPath();
ctx.moveTo(w/2-90, h/2+90)
ctx.lineTo(w/2-50, h/2+90);
ctx.arcTo(w/2-50, h/2+50, w/2-90, h/2+50, 40);
ctx.fill()

// back
ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
ctx.fillRect(w/2-75, h/2-75, 100, 100);

// front
ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
ctx.fillRect(w/2-25, h/2-25, 100, 100);

// top
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.beginPath();
ctx.moveTo(w/2-75, h/2-75);
ctx.lineTo(w/2-25, h/2-25);
ctx.lineTo(w/2+75, h/2-25);
ctx.lineTo(w/2+25, h/2-75);
ctx.fill();
// left
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.beginPath();
ctx.moveTo(w/2-75, h/2-75);
ctx.lineTo(w/2-75, h/2+25);
ctx.lineTo(w/2-25, h/2+75);
ctx.lineTo(w/2-25, h/2-25);
ctx.fill();
// right
ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
ctx.beginPath();
ctx.moveTo(w/2+25, h/2-75);
ctx.lineTo(w/2+25, h/2+25);
ctx.lineTo(w/2+75, h/2+75);
ctx.lineTo(w/2+75, h/2-25);
ctx.fill();
// bottom
ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
ctx.beginPath();
ctx.moveTo(w/2-75, h/2+25);
ctx.lineTo(w/2-25, h/2+75);
ctx.lineTo(w/2+75, h/2+75);
ctx.lineTo(w/2+25, h/2+25);
ctx.fill();

ctx.beginPath();
ctx.moveTo(w/2+20, h/2-20);
ctx.lineTo(w/2-20, h/2-20);
ctx.lineTo(w/2-20, h/2+15);
ctx.fillStyle = "rgba(255, 255, 255, 1)";
ctx.strokeStyle = "rgba(255, 255, 255, 1)";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(w/2-20, h/2+20);
ctx.lineTo(w/2+20, h/2+20);
ctx.lineTo(w/2+20, h/2-15);
ctx.closePath();
ctx.strokeStyle = "rgba(255, 255, 255, 1)";
ctx.stroke();