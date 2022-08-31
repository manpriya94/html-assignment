1. This is a small project to display shapes.
1. We have implemented this functionality using radio buttons.
1. Once the radio button is checked the corresponding shape is displayed on the screen.
1. We have created one html page to create the form to take input of shape from a radio button and create divisions for each shape, one css page to create the styling of the shapes and one javascript page for implementing the actual shape display functionality.
1. The javascript code reads html elements by the element name i.e. shape. A for loop is implemented to traverse each element of array and see if the element is checked i.e. if the radio buttion is checked for that particular shape the shape is display (shape.hidden = false) otherwise all shapes are hidden(shaoe.hidden = true).
1. Input element is mapped for display and hide using the shape id of each divs wherein the ID of the input can be concatenated with `_shape` to derive the ID of the div to be displayed.
1. To enalble that the html page is not loaded first and diplay all shapes we have called the showshape funtion on the starting when the window of the page will ve loaded.