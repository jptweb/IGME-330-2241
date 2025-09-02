Start off with the starter files.

Starting task: We want to give the green square a background


Uncomment the stuff about shadow but ask them what they
think will happen (hint: everything will get a shadow)

Show them an impractical solution; copy and paste the shadow stuff below / after the green traingle and reset them to the defaults

NEXT lets check out translate...

Around line 30 Lets ask em what you think will happen when we remove the translate ...
Will everything move, or just oen shape etc??

show the FIGMA, and play with translate

Take em through rotate WITH translate on and other one

DILEMA, how do we rotate one thing?

LETS get rid of GREEN and blue square keep triangle and orange squares

CENTER the triangle on ORIGIN.. the DRAW A better triangle!

// add save and restore around the better triangle and add the rotate now, see how it rotates at zero zero! draw it around origin and then move it later
			ctx.save();
            ctx.translate(500,100);
            ctx.rotate(-Math.PI/6);
            ctx.strokeStyle="red";
			ctx.fillStyle="red";
			ctx.lineWidth="5";
			ctx.beginPath();
			ctx.moveTo(0,-50);
			ctx.lineTo(50,50);
			ctx.lineTo(-50,50);
			ctx.closePath();
			ctx.stroke();
            ctx.restore();

NEXT lets do the squares!

Fill rect doesnt work as it doesn't draw it at orginin
NOR does our regular draw square one!

Lets get the helper function daw square 2!

drawSquare2(ctx,0,0,100,200,0,"red",1);

function drawSquare2(ctx,x,y,width,height,rotation,fillStyle,scale) {
    // Save the current drawing state
    ctx.save();
    // Set the fill style
    ctx.fillStyle = fillStyle;
    // Move the origin to (x, y)
    ctx.translate(x, y);
    // Rotate the canvas
    ctx.rotate(rotation);
    // Scale the canvas
    ctx.scale(scale, scale);
    // Draw the rectangle centered at the new origin
    ctx.fillRect(0-width / 2, 0-height / 2, width, height);
    // Restore the original state
    ctx.restore();
}



6b


Now lets add amimation in.

Go ahead and change init to loop (function and call)

move ctx to global scope

add requestAnimationFrame(loop); to start of loop function