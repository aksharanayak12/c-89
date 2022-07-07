    //Create "mouseEvent" variable and set it as “Empty”.

    //Create two variables "last_position_of_x" and  "last_position_of_y".
var last_position_of_touch_x, last_position_of_touch_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    color1="black";
    width1=1;

    var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;
    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }

    



    canvas.addEventListener("touchstart", my_touchstart);
    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    function my_touchstart(e)
    {
        color1=document.getElementById("color").value;
        width1=document.getElementById("width").value;
        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    }
    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
        {
            current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
            current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
            ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=width1;
        
        //If yes call "beginPath()".
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".
        

        //print the current x and y coordinate.
       

        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
        // The drawing begins from these points.
        ctx.moveTo( last_position_of_touch_x, last_position_of_touch_y);

        //print the current x and y coordinate.
       
        
        //Call "lineTo()" function with 'current_position_of_mouse_x' and 'current_position_of_mouse_y'.
        //Creation if lines end at these points
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);

        //Now we will draw the line using the stroke() function.
        ctx.stroke();
        
    
        // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
        last_position_of_touch_x = current_position_of_touch_x; 
        last_position_of_touch_y = current_position_of_touch_y;
    
}

//Additional Activity
function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
