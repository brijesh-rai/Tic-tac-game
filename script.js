let id = (id) => document.getElementById(id);
let doc = document.getElementById("root");
let title = document.querySelector(".result")
let prev = "";

let box_1 = id("box-1");
let box_2 = id("box-2");
let box_3 = id("box-3");
let box_4 = id("box-4");
let box_5 = id("box-5");
let box_6 = id("box-6");
let box_7 = id("box-7");
let box_8 = id("box-8");
let box_9 = id("box-9");

box_1.addEventListener("click",write_1);
box_2.addEventListener("click",write_2);
box_3.addEventListener("click",write_3);
box_4.addEventListener("click",write_4);
box_5.addEventListener("click",write_5);
box_6.addEventListener("click",write_6);
box_7.addEventListener("click",write_7);
box_8.addEventListener("click",write_8);
box_9.addEventListener("click",write_9);


let arr = ["X","O"];
function random(min,max)
{
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

let val = random(0,1);

    // let hr_x_1 = document.createElement("hr");
    // hr_x_1.classList.add("hr-x-1")
    // let hr_x_2 = document.createElement("hr");
    // hr_x_2.classList.add("hr-x-2")
    // let hr_x_3 = document.createElement("hr");
    // hr_x_3.classList.add("hr-x-3")
    // let hr_y_1 = document.createElement("hr");
    // hr_y_1.classList.add("hr-y-1")
    // let hr_y_2 = document.createElement("hr");
    // hr_y_2.classList.add("hr-y-2")
    // let hr_y_3 = document.createElement("hr");
    // hr_y_3.classList.add("hr-y-3")
    // let hr_diag_1 = document.createElement("hr");
    // hr_diag_1.classList.add("hr-diag-1")
    // let hr_diag_2 = document.createElement("hr");
    // hr_diag_2.classList.add("hr-diag-2")



function write_1(){
    let len = box_1.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_1.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_1.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_1.innerHTML = "O";
        click_play();
        prev = "O";
    }
    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_1 == box_x_2 && box_x_1 == box_x_3)
    {
        flicker_123();
        gameover()
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_1 == box_x_4 && box_x_1 == box_x_7)
    {
        flicker_147();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_1 == box_x_5 && box_x_1 == box_x_9)
    {
        flicker_159();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }

}

function write_2(){
    let len = box_2.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_2.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_2.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_2.innerHTML = "O";
        click_play();
        prev = "O";
    }
    
    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_2 == box_x_1 && box_x_2 == box_x_3)
    {
        flicker_123();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_2 == box_x_5 && box_x_2 == box_x_8)
    {
        flicker_258();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    
}

function write_3(){
    let len = box_3.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_3.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_3.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_3.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_3 == box_x_2 && box_x_3 == box_x_1)
    {
        flicker_123();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_3 == box_x_6 && box_x_3 == box_x_9)
    {
        flicker_369();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_3 == box_x_5 && box_x_3 == box_x_7)
    {
        flicker_357();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
}

function write_4(){
    let len = box_4.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_4.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_4.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_4.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_4 == box_x_1 && box_x_4 == box_x_7)
    {
        flicker_147();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_4 == box_x_5 && box_x_4 == box_x_6)
    {
        flicker_456();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
}

function write_5(){
    let len = box_5.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_5.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_5.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_5.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_5 == box_x_1 && box_x_5 == box_x_9)
    {
        flicker_159();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_5 == box_x_2 && box_x_5 == box_x_8)
    {
        flicker_258();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_5 == box_x_3 && box_x_5 == box_x_7)
    {
        flicker_357();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_5 == box_x_4 && box_x_5 == box_x_6)
    {
        flicker_456()
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
}

function write_6(){
    let len = box_6.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_6.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_6.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_6.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_6 == box_x_3 && box_x_6 == box_x_9)
    {
        flicker_369();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_6 == box_x_5 && box_x_6 == box_x_4)
    {
        flicker_456();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
}

function write_7(){
    let len = box_7.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_7.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_7.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_7.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_7 == box_x_4 && box_x_7 == box_x_1)
    {
        flicker_147();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_7 == box_x_5 && box_x_7 == box_x_3)
    {
        flicker_357();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_7 == box_x_8 && box_x_7 == box_x_9)
    {
        flicker_789();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
}

function write_8(){
    let len = box_8.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_8.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_8.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_8.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_8 == box_x_5 && box_x_8 == box_x_2)
    {
        flicker_258();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_8 == box_x_7 && box_x_8 == box_x_9)
    {
        flicker_789();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    
}

function write_9(){
    let len = box_9.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_9.innerHTML = arr[val];
        click_play();
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_9.innerHTML = "X";
        click_play();
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_9.innerHTML = "O";
        click_play();
        prev = "O";
    }

    let box_x_1 = box_1.innerHTML;
    let box_x_2 = box_2.innerHTML;
    let box_x_3 = box_3.innerHTML;
    let box_x_4 = box_4.innerHTML;
    let box_x_5 = box_5.innerHTML;
    let box_x_6 = box_6.innerHTML;
    let box_x_7 = box_7.innerHTML;
    let box_x_8 = box_8.innerHTML;
    let box_x_9 = box_9.innerHTML;

    if(box_x_9 == box_x_6 && box_x_9 == box_x_3)
    {
        flicker_369();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_9 == box_x_8 && box_x_9 == box_x_7)
    {
        flicker_789();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
    else if(box_x_9 == box_x_5 && box_x_9 == box_x_1)
    {
        flicker_159();
        gameover();
        title.innerHTML = "Game over!"
        remove();
    }
}

function click_play(){
    let click = new Audio("./click.wav");
    click.play();
}

function gameover(){
    let game_over = new Audio("./game_over.wav");
    game_over.play();
}

function flicker_123(){
    box_1.style.animation = "fliker 0.8s 3 linear forwards";
    box_2.style.animation = "fliker 0.8s 3 linear forwards";
    box_3.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_456(){
    box_4.style.animation = "fliker 0.8s 3 linear forwards";
    box_5.style.animation = "fliker 0.8s 3 linear forwards";
    box_6.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_789(){
    box_7.style.animation = "fliker 0.8s 3 linear forwards";
    box_8.style.animation = "fliker 0.8s 3 linear forwards";
    box_9.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_147(){
    box_1.style.animation = "fliker 0.8s 3 linear forwards";
    box_4.style.animation = "fliker 0.8s 3 linear forwards";
    box_7.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_258(){
    box_2.style.animation = "fliker 0.8s 3 linear forwards";
    box_5.style.animation = "fliker 0.8s 3 linear forwards";
    box_8.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_369(){
    box_3.style.animation = "fliker 0.8s 3 linear forwards";
    box_6.style.animation = "fliker 0.8s 3 linear forwards";
    box_9.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_159(){
    box_1.style.animation = "fliker 0.8s 3 linear forwards";
    box_5.style.animation = "fliker 0.8s 3 linear forwards";
    box_9.style.animation = "fliker 0.8s 3 linear forwards";
}
function flicker_357(){
    box_3.style.animation = "fliker 0.8s 3 linear forwards";
    box_5.style.animation = "fliker 0.8s 3 linear forwards";
    box_7.style.animation = "fliker 0.8s 3 linear forwards";
}

function remove(){
    box_1.removeEventListener("click",write_1);
    box_2.removeEventListener("click",write_2);
    box_3.removeEventListener("click",write_3);
    box_4.removeEventListener("click",write_4);
    box_5.removeEventListener("click",write_5);
    box_6.removeEventListener("click",write_6);
    box_7.removeEventListener("click",write_7);
    box_8.removeEventListener("click",write_8);
    box_9.removeEventListener("click",write_9);
}
