function showshape(shape) {

    let circle = document.getElementById("circle");
    let square = document.getElementById("square");
    let triangle = document.getElementById("triangle");
    let oval = document.getElementById("oval");

    const all_shapes = document.getElementsByClassName("shape");

    let shape_id;

    if (circle.checked === true)
        shape_id = 'circle_shape'
    else if (square.checked === true)
        shape_id = 'square_shape'
    else if (triangle.checked === true)
        shape_id = 'triangle_shape'
    else if (oval.checked === true)
        shape_id = 'oval_shape'

    for (let shape of all_shapes) {
        if (shape.id === shape_id) {
            shape.hidden = false;
        } else {
            shape.hidden = true;
        }
    }
}