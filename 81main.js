    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    var mouseEvent = "empty";
    var last_position_of_x, last_position_of_y;
    
    color = "black";
    width = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
         
        color = document.getElementById("color").value;
        width = document.getElementById("width").value;
        

        mouseEvent = "mouseDown";
        console.log(mouseEvent);
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_x = e.clientX - canvas.offsetLeft;
        current_position_of_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
        console.log(mouseEvent);
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
        console.log(mouseEvent);
    }


 
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}