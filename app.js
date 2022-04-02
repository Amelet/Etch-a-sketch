function create_pixel(i) {
    let div=document.createElement('div');
    div.id = i
    div.className = "grid-item"

    document.getElementsByClassName("grid-container")[0].appendChild(div)
}


function set_canvas_resolution(resolution) {
    document.getElementsByClassName("grid-container")[0].style.gridTemplateColumns =  'repeat('+resolution+', 1fr'; ///`${resolution}px solid black`; //grid-template-columns = 'repeat('+resolution+', 1fr';
}

function draw_canvas(resolution) {
    resolution*=resolution;
    console.log(document.getElementsByClassName("grid-container")[0])
    for (i = 0; i < resolution; i++){
        create_pixel(i);}

}

function color_pixel (e) {
    //console.log(e)
    console.log(clr)
    e.target.style.backgroundColor = clr
} 

function get_users_resolution () {
    usersInput = parseInt(prompt('Choose size of canvas'))
    if (usersInput >= 50) {
        return 50
    }
    else {return usersInput}
    
}

function getUsersCanvas() {
    var variable = document.getElementById('input_id').value;
    if (variable <= max_resolution) {
        document.getElementById('alert').innerHTML = 'Resolution: ' + variable+'x'+variable;}
    else {
        variable = max_resolution;
        document.getElementById('alert').innerHTML = 'Resolution is set to high <br> Canvas size: ' + variable+'x'+variable;}
    return parseInt(variable)
  }

function deleteOldPixels () {
    //find old pixels
    pixels = document.querySelectorAll(".grid-item")
    pixels.forEach(element => {
        element.parentNode.removeChild(element)
    });
}

function clearCanvas () {
    pixels = document.querySelectorAll(".grid-item");
    pixels.forEach(element => {
        console.log(element.style)
        element.style.backgroundColor = 'rgba(71, 72, 73, 0.432)';
    });
}

function startNewPicture () {
    deleteOldPixels()
    resolution = getUsersCanvas();
    set_canvas_resolution(resolution)
    draw_canvas(resolution)

    // Change pixel color if coursor is over it
    // a) select all pixels for the event listener
    pixels = document.querySelectorAll(".grid-item")
    console.log(pixels)

    // b) add event listener for each pixel
    pixels.forEach(element => {
        console.log(document.getElementById(element.id))
        element.addEventListener('mouseover', color_pixel)
        console.log('element id '+element.id)
    });
}

function getUserColor (clr) {
    clr = document.getElementById('input_id');
    clr = getComputedStyle(clr).getPropertyValue('background-color')
    console.log('users color: '+clr)
    return clr    
}

function getUserColorClick (e) {
    console.log('click')
    console.log(e.target)
    clr = getComputedStyle(e.target).getPropertyValue('background-color')
    console.log('Click, users color: '+clr)
    return clr    
}
  

function defaultCanvas() {
    // give a choice for canvas size
        //resolution=7;
        resolution = 10
        
        //usersInput = get_users_resolution()
    
        // Set canvas: resolution x resolution
        set_canvas_resolution(resolution)
        console.log(document.getElementsByClassName("grid-container")[0])
        draw_canvas(resolution)
    
    
        // Change pixel color if coursor is over it
        // a) select all pixels for the event listener
        pixels = document.querySelectorAll(".grid-item")
        console.log(pixels)

        
    
        // b) add event listener for each pixel
        pixels.forEach(element => {
            console.log(document.getElementById(element.id))
            element.addEventListener('mouseover', color_pixel)
            console.log('element id '+element.id)
        });
    }


let resolution;
let i;
let pixels;
let usersInput;
let btns;
let clr;
let max_resolution = 25;

// set colors
clr = 'rgba(255, 0, 0, 0.322)'
btns = document.querySelectorAll('.colors')
console.log(btns)
btns.forEach(element => {
    element.addEventListener('click', getUserColorClick)

});

// start game with default canvas
defaultCanvas()

// by pressing 'Create new canvas' -> function StartNewCanvas fires


