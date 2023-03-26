var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

// Add an event listener and call the required function
window.addEventListener("keydown",keyisdown)
// Define the my_keydown function
function keyisdown(e)
{
	keypress=e.keyCode;
	console.log(keypress)
	if (e.shiftKey == true && keypress == "80"){
		console.log("shiftKeypress");
		block_image_width = block_image_width + 10;
		block_image_height= block_image_height + 10;
	document.getElementById("current_width").innerHTML=block_image_width;
	document.getElementById("current_height").innerHTML=block_image_height;
	
	}
	if (e.shiftKey == true && keypress == "77"){
		console.log("shiftKeypress");
		block_image_width = block_image_width - 10;
		block_image_height= block_image_height - 10;
	document.getElementById("current_width").innerHTML=block_image_width;
	document.getElementById("current_height").innerHTML=block_image_height;
	}
    // Check if the key value is equal to the w key value 119
if(keypress=="87"){
	up();
	console.log("up");
}
	



	// Check if the key value is equal to the s key value 115
	if(keypress=="83"){
	   down();
		console.log("down");}
	



	// Check if the key value is equal to the a key value 37
	if(keypress=="65"){
		left();
		console.log("left");}




	// Check if the key value is equal to the RIGHT arrow key value 39
	if(keypress=="68"){
		right();
		console.log("right");}




	// Check if the key value is equal to the 'e' key value 87
	if (keypress=="101"){
	   new_image(dark_green)
       console.log("e")}


	// Check if the key value is equal to the 'G' key value 71
	if(keypress=="71"){
		new_image('ground.png')
		console.log("g");}
        



	// Check if the key value is equal to the 'L' key value 76
	
	if(keypress=="76"){
		new_image('light_green.png')
		console.log("l");}



	// Check if the key value is equal to the 'T' key value 84
	if(keypress=="84"){
		new_image('trunk.jpg')
		console.log("t");}



	// Check if the key value is equal to the 'R' key value 82
	if(keypress=="82"){
		new_image('roof.jpg')
		console.log("r");}



	// Check if the key value is equal to the 'Y' key value 89
	if(keypress=="89"){
		new_image('yellow_wall.png')
		console.log("y");}


	// Check if the key value is equal to the 'F' key value 68
	if(keypress=="102"){
		new_image('dark_green.png')
		console.log("f");}

	// Check if the key value is equal to the 'C' key value 67
	if(keypress=="67"){
		new_image('cloud.jpg')
		console.log("c");}


	}
// Function to move the player up when UP arrow key is pressed
function up()
{
	if(player_y>=0)
	{
		player_y=player_y-block_image_height
		console.log("block_image_height="+block_image_height);
		console.log("when up arrow pressed,x="+ player_x+" , y= "+player_y);
		canvas.remove (player_object);
		player_update();
	}
}
// Function to move the player down when DOWN arrow key is pressed
function down()
{
	if(player_y<=500)
	{
		player_y=player_y+block_image_height
		console.log("block_image_height="+block_image_height);
		console.log("when down arrow pressed,x="+ player_x+" , y= "+player_y);
		canvas.remove (player_object);
		player_update();
	}
}
// Function to move the player left when LEFT arrow key is pressed
function left()
{
	if(player_x>=0)
	{
		player_x=player_x-block_image_width
		console.log("block_image_width="+block_image_width);
		console.log("when left arrow pressed,x="+ player_x+" , y= "+player_y);
		canvas.remove (player_object);
		player_update();
	}
}
// Function to move the player right when RIGHT arrow key is pressed
function right()
{
	if(player_x<=950)
	{
		player_x=player_x+block_image_width
		console.log("block_image_width="+block_image_width);
		console.log("when left arrow pressed,x="+ player_x+" , y= "+player_y);
		canvas.remove (player_object);
		player_update();
	}
}
