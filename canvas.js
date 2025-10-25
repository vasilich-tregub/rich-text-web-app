function drawTextEn() {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.font = "112px serif";
    const text = "Glyphs(), filled and stroked with transparency";
    const words = text.split(" ");
    let xpos = 5;
    let ypos = 100;
    for (let ix = 0; ix < words.length; ++ix) {
        let metrics = ctx.measureText(words[ix] + " ");
        if (xpos + metrics.width > 1275) {
            xpos = 5;
            ypos += 120;
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
    ctx.font = "112px serif";
    ctx.strokeText(textRun, xpos, ypos);
    ctx.fillText(textRun, xpos, ypos);
    //ctx.strokeText(textCont, 5, 200);
    //ctx.fillText(textCont, 5, 200);
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
    ctx.font = "112px serif";
    ctx.strokeText(text, 368, 400);
    ctx.fillText(text, 368, 400);
    ctx.strokeText(textCont, 1000, 500);
    ctx.fillText(textCont, 1000, 500);
}
function imageBackground() {
    var img = new Image();
    const ctx = document.getElementById("canvas").getContext("2d");
    img.onload = function () {
        ctx.save();
        const pattern = ctx.createPattern(img, "repeat");
        ctx.globalAlpha = 1;
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    };
    img.src = './image.jpg';
}
function colorBackground() {
    const ctx = document.getElementById("canvas").getContext("2d");
    ctx.globalAlpha = 1;
    ctx.fillStyle = "slateblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
