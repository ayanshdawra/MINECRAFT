var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_image_width = 30;
var block_image_height = 30;

var player_image = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_image = Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
    
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
    
}
window.addEventListener("keydown",my_key_down);
function my_key_down(e){
key_pressed=e.keyCode;
console.log(key_pressed);
if(e.shiftKey==true && key_pressed==80){
    console.log("shift & p are pressed together");
    block_image_height=block_image_height+10;
    block_image_width=block_image_width+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && key_pressed==77){
    console.log("shift & m are pressed together");
    block_image_height=block_image_height-10;
    block_image_width=block_image_width-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(key_pressed==37){
left();
console.log("LEFT");
}
if(key_pressed==38){
    up();
    console.log("UP");
    }
    if(key_pressed==39){
        right();
        console.log("RIGHT");
        }
        if(key_pressed==40){
            down();
            console.log("DOWN");
            }
            if(key_pressed==67){
                new_image("cloud.jpg")
                console.log("C");
                }
                if(key_pressed==68){
                    new_image("dark_green.png")
                    console.log("D");
                    }
                    if(key_pressed==71){
                        new_image("ground.png")
                        console.log("G");
                        }
                        if(key_pressed==76){
                            new_image("light_green.png")
                            console.log("L");
                            }
                            if(key_pressed==82){
                                new_image("roof.jpg")
                                console.log("R");
                                }
                                if(key_pressed==84){
                                    new_image("trunk.jpg")
                                    console.log("T");
                                    }
                                    if(key_pressed==85){
                                        new_image("unique.png")
                                        console.log("U");
                                        }
                                        if(key_pressed==87){
                                            new_image("wall.jpg")
                                            console.log("W");
                                            }
                                            if(key_pressed==89){
                                                new_image("yellow_wall.jpg")
                                                console.log("Y");
                                                }                
}