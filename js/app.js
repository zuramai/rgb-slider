let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let colorPreview = document.getElementById('color-preview');

setColor()

function setColor() {
    let red_hex = parseInt(red.value,10).toString(16);
    let blue_hex = parseInt(blue.value,10).toString(16);
    let green_hex = parseInt(green.value,10).toString(16);

    let the_hex = '#'+ pad(red_hex) + pad(blue_hex) + pad(green_hex);
    let the_rgb = `rgb(${red.value}, ${green.value}, ${blue.value})`;

    colorPreview.style.backgroundColor = the_hex;
    colorPreview.innerText = the_rgb;
}

function pad(n){
    return (n.length<2) ? "0"+n : n;
}
  

red.addEventListener('change', function() {
    setColor();
})
red.addEventListener('input', function() {
    setColor();
})
green.addEventListener('change', function() {
    setColor();
})
green.addEventListener('input', function() {
    setColor();
})

blue.addEventListener('change', function() {
    setColor();
})
blue.addEventListener('input', function() {
    setColor();
})

