window.onload = () => { colorBackground("#6a5acd"); };
function clearCanvas() {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawTextEn() {
    const ctx = document.getElementById("canvas").getContext("2d");
    let fontsz = document.getElementById("fontsize").value;
    ctx.font = fontsz.toString() + "px serif";
    const text = "Glyphs(), filled and stroked with transparency";
    const words = text.split(" ");
    let xpos = 5;
    let ypos = 100;
    for (let ix = 0; ix < words.length; ++ix) {
        let metrics = ctx.measureText(words[ix] + " ");
        if (xpos + metrics.width > 1275) {
            xpos = 5;
            ypos += metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        }
        drawTextRun(words[ix], xpos, ypos);
        xpos += metrics.width;
    }
}
function drawTextRun(textRun, xpos, ypos) {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.strokeStyle = "lime";
    ctx.lineWidth = strokeLineWidth.value;
    ctx.fillStyle = "fuchsia";
    ctx.globalAlpha = gAlpha.value;
    let fontsz = document.getElementById("fontsize").value;
    ctx.font = fontsz.toString() + "px serif";
    ctx.strokeText(textRun, xpos, ypos);
    ctx.fillText(textRun, xpos, ypos);
    //ctx.strokeText(textCont, 5, 200);
    //ctx.fillText(textCont, 5, 200);
}
function drawTextAr() {
    const text = "الرموز()، ممتلئة ومحددة"
    const textCont = "بشفافية"
    const ctx = document.getElementById("canvas").getContext("2d", {
        willReadFrequently: true, // will force the use of a software (instead of hardware accelerated) 2D canvas
        // and can save memory when calling getImageData() frequently
        desynchronyzed: true, // reduces the latency by desynchronizing the canvas paint cycle from the event loop
    });
    ctx.strokeStyle = "lime";
    ctx.lineWidth = strokeLineWidth.value;
    ctx.fillStyle = "fuchsia";
    ctx.globalAlpha = gAlpha.value;
    let fontsz = document.getElementById("fontsize").value;
    ctx.font = fontsz.toString() + "px serif";
    ctx.strokeText(text, 368, 400);
    ctx.fillText(text, 368, 400);
    ctx.strokeText(textCont, 1000, 500);
    ctx.fillText(textCont, 1000, 500);
}
function imageBackground() {
    document.getElementById("canvasbackground").style.backgroundImage = "url('image.jpg')";
    document.getElementById("canvasbackground").style.backgroundRepeat = "repeat";
}
function colorBackground(color) {
    document.getElementById("canvasbackground").style.backgroundImage = "none";
    document.getElementById("canvasbackground").style.backgroundColor = color;
}
function downloadCanvasContent() {
    var link = document.createElement("a");
    link.download = "canvas-image.png";

    canvas.toBlob((blob) => {
        link.href = URL.createObjectURL(blob);
        console.log(blob);
        console.log(link.href);
        link.click(); // saves image.png to downloads
    }, "image/png");

}
