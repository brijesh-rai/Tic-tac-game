let id = (id) => document.getElementById(id);

let box_1 = id("box-1");
let box_2 = id("box-2");
let box_3 = id("box-3");
let box_4 = id("box-4");
let box_5 = id("box-5");
let box_6 = id("box-6");
let box_7 = id("box-7");
let box_8 = id("box-8");
let box_9 = id("box-9");

let prev = "";
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

function write_1(){
    let len = box_1.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_1.innerHTML = arr[val];
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_1.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_1.innerHTML = "O";
        prev = "O";
    }
}

function write_2(){
    let len = box_2.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_2.innerHTML = arr[val];
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_2.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_2.innerHTML = "O";
        prev = "O";
    }
    
}

function write_3(){
    let len = box_3.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_3.innerHTML = arr[val];
        prev = arr[val];
    }
    else if(len == 0 && prev == "O")
    {
        box_3.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_3.innerHTML = "O";
        prev = "O";
    }
}

function write_4(){
    let len = box_4.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_4.innerHTML = arr[val];
        prev = arr[val];
    }
    if(len == 0 && prev == "O")
    {
        box_4.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_4.innerHTML = "O";
        prev = "O";
    }
}

function write_5(){
    let len = box_5.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_5.innerHTML = arr[val];
        prev = arr[val];
    }
    if(len == 0 && prev == "O")
    {
        box_5.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_5.innerHTML = "O";
        prev = "O";
    }
}

function write_6(){
    let len = box_6.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_6.innerHTML = arr[val];
        prev = arr[val];
    }
    if(len == 0 && prev == "O")
    {
        box_6.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_6.innerHTML = "O";
        prev = "O";
    }
}

function write_7(){
    let len = box_7.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_7.innerHTML = arr[val];
        prev = arr[val];
    }
    if(len == 0 && prev == "O")
    {
        box_7.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_7.innerHTML = "O";
        prev = "O";
    }
}

function write_8(){
    let len = box_8.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_8.innerHTML = arr[val];
        prev = arr[val];
    }
    if(len == 0 && prev == "O")
    {
        box_8.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_8.innerHTML = "O";
        prev = "O";
    }
}

function write_9(){
    let len = box_9.innerHTML.length;

    if(len == 0 && prev == "")
    {
        box_9.innerHTML = arr[val];
        prev = arr[val];
    }
    if(len == 0 && prev == "O")
    {
        box_9.innerHTML = "X";
        prev = "X";
    }
    else if(len == 0 && prev == "X")
    {
        box_9.innerHTML = "O";
        prev = "O";
    }
}
