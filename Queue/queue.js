var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext('2d')
ctx.font = "20px Arial";

var arr = [];

document.getElementById('enqueue').addEventListener("click", enqueue_toqueue);
document.getElementById('dequeue').addEventListener("click", dequeue_fromqueue);

function enqueue_toqueue() {
    var num = document.getElementById('enqueuevalue').value;
    if (Number.isInteger(parseInt(num))) {
        if (arr.length == 0)
            drawqueue();

        if (120 + 75 * arr.length > 730)
            alert("Queue is full");
        else {
            arr.push(parseInt(num));
            queueelement(parseInt(num));
        }
    }
    else {
        alert("Give appropriate input value");
    }
    document.getElementById('enqueuevalue').value = '';
    return false;
}

function dequeue_fromqueue() {
    if (arr.length == 0)
        alert("Queue is Empty");
    else {
        ctx.clearRect(100, 200, 800, 100);
        arr.shift();
        drawqueue();
        for (var i = 0; i < arr.length; i++) {
            ctx.strokeRect(120 + 75 * i, 220, 75, 60);
            ctx.fillText(arr[i], 120 + 75 * i + 20, 250);
        }
    }
}

function drawqueue() {
    ctx.strokeRect(100, 200, 800, 100);
}

function queueelement(num) {
    ctx.strokeRect(45 + 75 * arr.length, 220, 75, 60);
    ctx.fillText(num, 45 + 75 * arr.length + 20, 250);
}

function clear() {
    ctx.clearRect(0, 0, 1100, 550);
}