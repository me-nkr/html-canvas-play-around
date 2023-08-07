/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

canvas.width = window.outerWidth * 0.9;
canvas.height = canvas.width * 0.7

let w = canvas.width;
let h = canvas.height;

const ctx = canvas.getContext('2d');

const cen = createRect(ctx);
const top1 = createRect(ctx, cen, 'top');
const toptop1 = createRect(ctx, top1, 'top');
const right1 = createRect(ctx, cen, 'right');
const bottom1 = createRect(ctx, cen, 'bottom');
const left1 = createRect(ctx, cen, 'left');

function randb(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

/**
 * function to create a rectangle, draw it and store it's info (return the info object)
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {{
 *      dims: { startCords: { x: number, y: number }, width: number },
 *      spaces: {
 *          top: { self: number, totalX: number, totalY: number },
 *          right: { self: number, totalX: number, totalY: number },
 *          bottom: { self: number, totalX: number, totalY: number },
 *          left: { self: number, totalX: number, totalY: number },
 *      }
 * }} refRect 
 * @param {'top' | 'right' | 'bottom' | 'left'} side 
 */
function createRect(ctx, refRect, side) {
    let x, y, s;
    
    if (!refRect) {
        x = w/2-100;
        y = h/2-100;
        s = 200;
    }
    else {
        s = randb(
          50,
          refRect.spaces[side].totalX < refRect.spaces[side].totalY
            ? refRect.spaces[side].totalX
            : refRect.spaces[side].totalY
        );
        switch (side) {

            case 'top':
                x = refRect.dims.startCords.x + ( refRect.dims.width - refRect.spaces.top.self );
                y = refRect.dims.startCords.y - s;
                break;
            case 'right':
                x = refRect.dims.startCords.x + refRect.dims.width;
                y = refRect.dims.startCords.y + ( refRect.dims.width - refRect.spaces.right.self );
                break;
            case 'bottom':
                x = ( refRect.dims.startCords.x + refRect.spaces.bottom.self ) - s;
                y = refRect.dims.startCords.y + refRect.dims.width;
                break;
            case 'left':
                x = refRect.dims.startCords.x - s;
                y = ( refRect.dims.startCords.y + refRect.spaces.left.self ) - s;
                break;
        }

        refRect.spaces[side].self -= s;
        refRect.spaces[side].totalX -= s;
        refRect.spaces[side].totalY -= s;
    }

    const resRect = {
        dims: { startCords: { x, y}, width: s },
        spaces: {
            top: { self: s, totalX: w-x, totalY: y },
            right: { self: s, totalX: w-(x+s), totalY: h-y },
            bottom: { self: s, totalX: x+s, totalY: h-(y+s) },
            left: { self: s, totalX: x, totalY: y+s },
        }
    }

    ctx.rect(x, y, s, s);
    ctx.stroke();

    return resRect;
}