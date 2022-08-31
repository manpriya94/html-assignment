function showshape() {

    const all_inputs = document.getElementsByName("shape");
    const all_shapes = document.getElementsByClassName("shape");

    let shape_id;

    for (const input of all_inputs) {
        if (input.checked === true) {
            shape_id = input.id + '_shape';
            break;
        }
    }

    for (let shape of all_shapes) {
        if (shape.id === shape_id) {
            shape.hidden = false;
        } else {
            shape.hidden = true;
        }
    }
}

window.onload = showshape;