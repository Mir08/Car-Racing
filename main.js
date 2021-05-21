canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

Car1_width = 120;
Car1_height = 70;

Car2_width = 120;
Car2_height = 150;

background_image = "racing.jpg";
console.log("backgound_image = " + background_image);
Car1_image = "car1.png";
Car2_image = "car2.png";

Car1_x = 10;
Car1_y = 10;

Car2_x = 10;
Car2_y = 80;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Car1_imgTag = new Image();
    Car1_imgTag.onload = uploadCar1;
    Car1_imgTag.src = Car1_image;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadCar2;
    Car2_imgTag.src = Car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1()
{
    ctx.drawImage(Car1_imgTag, Car1_x, Car1_y, Car1_width, Car1_height);
}

function uploadCar2()
{
    ctx.drawImage(Car2_imgTag, Car2_x, Car2_y, Car2_width, Car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
}
