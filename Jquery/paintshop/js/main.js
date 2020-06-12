/*$(document).on('click', function(){
  console.log('clicked!');
}); */
var hue = 0; // global variable that is remembered
let prev = 0;
var circleSize = 0.5;

$(document).on('mousemove', function(event){



var xPosition = event.clientX;
var yPosition = event.clientY;



if (prev < xPosition)
{
  circleSize += 0.1;
}

if (prev > xPosition) {
  circleSize -= 0.1;
}

  console.log(xPosition, yPosition );
  console.log(circleSize);

  var circleDiv = $('<div>');

hue += 1;
  circleDiv.css({
    position: 'absolute', // These could just go in a css file
    borderRadius: '50%',
    top: yPosition - circleSize/2,
    left: xPosition - circleSize/2,
    width: circleSize,
    height: circleSize,
    backgroundColor: 'hsla(' + hue + ', 100%, 50%, 0.2)' //first value is the angle of the circle i.e hue
    // last value is opacity
  });

// if(event.shiftKey == true){
//   circleDiv.appendTo('body').animate({top:0});
// }
  circleDiv.appendTo('body');
  prev = xPosition;

});
