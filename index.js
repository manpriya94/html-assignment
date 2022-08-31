function showshape() {
    const all_inputs = document.getElementsByName("shape");

    let shape_id;

    for (const input of all_inputs) {
        shape_id = input.id + '_shape';
        if (input.checked === true)
            document.getElementById(shape_id).hidden = false;
        else
            document.getElementById(shape_id).hidden = true;
    }
}

window.onload = showshape;