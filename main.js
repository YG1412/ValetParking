window.addEventListener("keydown", my_keydown);
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

    car_width = 75;
    car_height = 100;

    background_image = "ValetParking.png"
    car_image = "Car.png"

    car_x = 5;
    car_y = 225;



function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.car_height);

}

function uploadcar() {
    ctx.drawImage(url("Car.png"), car_x, car_y, car_width, car_height);

}


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = url("Car.png");
}
window.addEventListener("keydown","my_keydown");

function my_keydown(e)
{
 keyPressed = e.keyCode
 console.log(keyPressed)
 if(keyPressed == '38')
 {
    up();
    console.log("up");
 }
}

function up() {
    if (car_y >= 0) {
        car_y = car_y - 10;
        console.log("When up arrow is pressed, x = " + car_x + " l y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down() {
    if (car_y <= 500) {
        car_y = car_y + 10;
        console.log("When down arrow is pressed, x = " + car_x + " l y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function left() {
    if (car_x >= 0) {
        car_x = car_x - 10;
        console.log("When left arrow is pressed, x = " + car_x + " l y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function right() {
    if (car_x <= 700) {
        car_x = car_x + 10;
        console.log("When right arrow is pressed, x = " + car_x + " l y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
}



