

$(document).ready(function () {
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    //DRAW START


    //Draw lots of Circles
    /*var c;
    for (var x = 25; x < 400; x += 50) {
        for (var y = 25; y < 400; y += 50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }*/

    //Interactive circle
    /*var tool = new Tool();
    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };*/


    //Interactive circle with names
    var tool = new Tool();

    var c = Shape.Circle(200, 200, 100);
    c.fillColor = 'black';

    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = '25';
    text.content = 'Hey! Alisa Blue';


    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
        var text = new PointText(event.point.x, event.point.y);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = '15';
        text.content = 'Alisa';

    };



    //DRAW END

    paper.view.draw();

    console.log('main.js loaded');
});
