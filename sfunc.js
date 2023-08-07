/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

canvas.width = window.outerWidth * 0.9;
canvas.height = canvas.width * 0.7

let w = canvas.width;
let h = canvas.height;

const ctx = canvas.getContext('2d');

class Shuriken {

  constructor(ctx) {
    this.ctx = ctx;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  renderAt(x, y, r) {

    this.ctx.beginPath();
    this.ctx.moveTo(x - r, y);
    this.ctx.quadraticCurveTo(x-r/2, y+r/4, x-r/4, y-r/4);
    this.ctx.quadraticCurveTo(x-r/2, y-r/2, x, y-r);
    this.ctx.quadraticCurveTo(x-r/4, y-r/2, x+r/4, y-r/4);
    this.ctx.quadraticCurveTo(x+r/2, y-r/2, x+r, y);
    this.ctx.quadraticCurveTo(x+r/2, y-r/4, x+r/4, y+r/4);
    this.ctx.quadraticCurveTo(x+r/2, y+r/2, x, y+r);
    this.ctx.quadraticCurveTo(x+r/4, y+r/2, x-r/4, y+r/4);
    this.ctx.quadraticCurveTo(x-r/2, y+r/2, x-r, y);

    this.ctx.fillStyle = "rgba(64, 64, 64, 1)";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(x+r/3.5, y);
    this.ctx.arc(x, y, r/3.5, 0, 2 * Math.PI);

    this.ctx.fillStyle = "black";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(x+r/4, y);
    this.ctx.arc(x, y, r/4, 0, 2 * Math.PI);

    this.ctx.fillStyle = "white";
    this.ctx.fill();

    return this;
  }
}

const shuriken = new Shuriken(ctx);

const posRads = [
    [ w/4, h/4, 40 ],
    [ w/3, h/3, 100 ],
    [ w/2+100, h/2+100, 70 ]
]

// renderShurikens(shuriken, posRads);

function renderShurikens(shuriken, posRadArray) {
    posRadArray.forEach(posRad => {
       shuriken.renderAt.apply(shuriken, posRad); 
    });
}

function randb(min, max) { return Math.floor(Math.random() * ((max - min) + 1) + 1) }

// Here is the plan now
// we need to fill the whole canvas with squares
// but instead of squares of uniform size, we need random sizes
// these squares should take up enough space to fill the canvas
// none of these should overlap
// the function should output the cordinates of the center of the square and half of the width
//      like this [ centerX, centerY, side/2 ]

// questions
// where does the next rectangle start form, top-right? bottom-left?
//      how about next one is bottom-left, and next bottom-left will be only after filling that row? (won't it make the whole thing less random?)
// even though the size is random, how do I make sure it fits in without overlapping



let x = randb(1, 500);
let y = 0;
ctx.rect(0, y, x, x);
y = x;
x = randb(1, 500);
ctx.rect(0, y, x, x);
y = x;
ctx.stroke();