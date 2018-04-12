function setup() {
    createCanvas(800, 800);
    background(153);
    strokeWeight(10);
    point(400, 400);
}

function render() {
    pixelDensity(1);
    loadPixels();
    setPixelsToGreyscale();
}

function setPixelsToGreyscale() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pixel = (x + y * width) * 4;
            pixels[pixel + 0] = 51;
            pixels[pixel + 1] = 51;
            pixels[pixel + 2] = 51;
            pixels[pixel + 3] = 255;
        }
    }
    updatePixels();
}

render();
